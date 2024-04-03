import axios from 'axios';
import Response from 'next'
import { NextResponse } from 'next/server';

export async function POST (
  req: Request,
  res: Response,
  ) {
  try {
    const form_data = await req.json();

    const find = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/workers?filters[Login][$eq]=${form_data.login}`, {
      headers: {
        "Authorization": "Bearer " + process.env.NEXT_PUBLIC_API_KEY,
        "Content-Type": "application/json"
      }
    })

    const users = find.data.data;

    if (!(users.length > 0)) {
      return NextResponse.json('not_found', {status: 404});
    }

    //@ts-ignore
    if (form_data.password !== users[0].attributes.Password) {
      return NextResponse.json('wrong_password', {status: 301});
    }

    return NextResponse.json(users[0].attributes, {status: 200});
  } catch (error) {
    console.error(error);
    NextResponse.json('error', {status: 500});
  }
}