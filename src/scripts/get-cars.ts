interface Car {
  color: string;
  id: number;
  name: string;
}

interface Test {
  xTotalCount: string | null;
  cars: Car[];
  totalPages: number | undefined;
}

async function getCars(page: number = 1, limit: number = 7): Promise<Test> {
  const res = await fetch(`http://localhost:3000/garage?_page${page}&_limit=${limit}`);
  const cars: Car[] = await res.json();
  const xTotalCount = res.headers.get('X-Total-Count');
  let totalPages;
  if (xTotalCount) {
    totalPages = Math.ceil(Number(xTotalCount) / limit);
  }

  const result: Test = {
    xTotalCount,
    cars,
    totalPages,
  };
  return result;
}

export { Car, Test, getCars };
