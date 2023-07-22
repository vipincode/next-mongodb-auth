import { connectDB } from '@/config/dbConfig';
import { NextRequest, NextResponse } from 'next/server';

// Making connection
connectDB();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    return NextResponse.json({
      message: 'Register successfully',
      success: true,
      data: body,
    });
  } catch (error: any) {
    NextResponse.json({ error: error.message }, { status: 500 });
  }
}
