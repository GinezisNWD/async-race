interface Car {
  color: string;
  id: number;
  name: string;
}

interface Resp {
  xTotalCount: string | null;
  cars: Car[];
  totalPages: number | undefined;
}

async function getCars(page: number = 1, limit: number = 7): Promise<Resp> {
  const res = await fetch(`http://localhost:3000/garage?_page=${page}&_limit=${limit}`);
  const cars: Car[] = await res.json();
  const xTotalCount = res.headers.get('X-Total-Count');
  let totalPages;
  if (xTotalCount) {
    totalPages = Math.ceil(Number(xTotalCount) / limit);
  }

  const result: Resp = {
    xTotalCount,
    cars,
    totalPages,
  };
  return result;
}

export { Car, Resp, getCars };
