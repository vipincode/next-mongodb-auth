import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.nextUrl);
    console.log(searchParams.get('user'));

    return NextResponse.json({
      message: 'Request success',
      data: {
        name: 'Vipin',
        email: 'v@gmail.com',
      },
    });
  } catch (error: any) {
    NextResponse.json({ error: error.message }, { status: 500 });
  }
}
