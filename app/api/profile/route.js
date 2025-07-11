// app/api/profile/route.js
import axios from 'axios';

export async function GET(req) {
  const token = process.env.ACCESS_TOKEN;

  try {
    const response = await axios.get('https://api.upstox.com/v2/user/profile', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    return Response.json(response.data);
  } catch (error) {
    console.error("Upstox API Error:", error.message);
    return new Response(JSON.stringify({ error: 'Failed to fetch profile' }), {
      status: error.response?.status || 500,
    });
  }
}
