const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const GET = async (path: string) => {
  const response = await fetch(`/${API_URL}/${path}`);

  return response.json();
};

export const POST = async (path: string, data: object) => {
  const response = await fetch(`/${API_URL}/${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const PUT = async (path: string, data: object) => {
  const response = await fetch(`/${API_URL}/${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  return response.json();
};

export const DELETE = async (path: string) => {
  const response = await fetch(`/${API_URL}/${path}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
  });

  return response.json();
};
