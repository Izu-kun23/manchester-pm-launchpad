/**
 * MailerLite API integration utilities
 */

interface MailerLiteSubscriber {
  email: string;
  fields?: {
    name?: string;
    [key: string]: any;
  };
  groups?: string[];
  status?: 'active' | 'unsubscribed' | 'bounced' | 'junk';
}

interface MailerLiteResponse {
  data?: any;
  message?: string;
  errors?: Array<{ field: string; message: string }>;
}

/**
 * Add a subscriber to MailerLite group
 */
export async function addSubscriberToMailerLite(
  email: string,
  firstName: string,
  groupId?: string
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.MAILERLITE_API_KEY;
  const defaultGroupId = process.env.MAILERLITE_GROUP_ID || groupId;

  if (!apiKey) {
    console.error('MailerLite API key is not configured');
    return { success: false, error: 'MailerLite API key is not configured' };
  }

  if (!defaultGroupId) {
    console.error('MailerLite Group ID is not configured');
    return { success: false, error: 'MailerLite Group ID is not configured' };
  }

  const subscriber: MailerLiteSubscriber = {
    email,
    fields: {
      name: firstName,
    },
    groups: [defaultGroupId],
    status: 'active',
  };

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(subscriber),
    });

    const data: MailerLiteResponse = await response.json();

    if (!response.ok) {
      // Handle existing subscriber (409) or other errors
      if (response.status === 409) {
        // Subscriber already exists, try to update/add to group
        return await updateSubscriberGroup(email, firstName, defaultGroupId);
      }

      const errorMessage =
        data.message || data.errors?.[0]?.message || `HTTP ${response.status}`;
      console.error('MailerLite API error:', errorMessage);
      return { success: false, error: errorMessage };
    }

    return { success: true };
  } catch (error) {
    console.error('Error adding subscriber to MailerLite:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Update existing subscriber to add them to a group
 * Uses MailerLite's group assignment endpoint
 */
async function updateSubscriberGroup(
  email: string,
  firstName: string,
  groupId: string
): Promise<{ success: boolean; error?: string }> {
  const apiKey = process.env.MAILERLITE_API_KEY;

  if (!apiKey) {
    return { success: false, error: 'MailerLite API key is not configured' };
  }

  try {
    // Try to add subscriber directly to the group
    // This endpoint handles both new and existing subscribers
    const addToGroupResponse = await fetch(
      `https://connect.mailerlite.com/api/groups/${groupId}/subscribers`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          email,
          fields: {
            name: firstName,
          },
        }),
      }
    );

    if (addToGroupResponse.ok) {
      return { success: true };
    }

    // If direct group assignment fails, try updating the subscriber
    const getResponse = await fetch(
      `https://connect.mailerlite.com/api/subscribers/${encodeURIComponent(email)}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    if (!getResponse.ok) {
      return {
        success: false,
        error: `Failed to fetch subscriber: HTTP ${getResponse.status}`,
      };
    }

    const subscriberData = await getResponse.json();

    // Update the subscriber to add them to the group
    const updateResponse = await fetch(
      `https://connect.mailerlite.com/api/subscribers/${subscriberData.data.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          fields: {
            name: firstName,
          },
          groups: [...(subscriberData.data.groups || []), groupId],
        }),
      }
    );

    if (!updateResponse.ok) {
      const errorData = await updateResponse.json();
      return {
        success: false,
        error:
          errorData.message || errorData.errors?.[0]?.message || 'Failed to update subscriber',
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Error updating subscriber in MailerLite:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

