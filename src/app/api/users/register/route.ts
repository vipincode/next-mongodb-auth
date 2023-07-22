import { connectDB } from '@/config/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/modals/userModel';
import bcrypt from 'bcryptjs';

// Making connection
connectDB();

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    // Check user exist
    const user = await User.findOne({ email: formData.email });
    if (user) {
      throw new Error('User is already exist');
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(formData.password, salt);
    formData.password = hashedPassword;

    // Create user
    const newUser = new User(formData);
    newUser.save();

    // Send status
    return NextResponse.json({
      message: 'Register successfully',
      success: true,
    });
  } catch (error: any) {
    NextResponse.json({ message: error.message }, { status: 500 });
  }
}
