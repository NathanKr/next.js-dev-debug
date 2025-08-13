import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  
  const num = 5;

  return NextResponse.next();
}