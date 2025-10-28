import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma-client';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, email, whatsapp, background, answers, scores, resultType } = body;

    // Validate required fields
    if (!firstName || !email || !whatsapp || !background || !answers || !scores || !resultType) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Save quiz submission
    const quizSubmission = await prisma.quizSubmission.create({
      data: {
        firstName,
        email,
        whatsapp,
        background,
        answers: answers as any,
        scores: scores as any,
        resultType,
      },
    });

    // Also create a lead record
    const lead = await prisma.lead.create({
      data: {
        firstName,
        email,
        whatsapp,
        background,
        source: 'quiz',
        status: 'new',
        notes: `Quiz result: ${resultType}`,
      },
    });

    return NextResponse.json({
      success: true,
      quizSubmissionId: quizSubmission.id,
      leadId: lead.id,
    });
  } catch (error) {
    console.error('Error saving quiz data:', error);
    return NextResponse.json(
      { error: 'Failed to save quiz data' },
      { status: 500 }
    );
  }
}
