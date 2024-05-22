export default async function Page() {
  console.log('Loading customers page...');
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log('Customers page completed after 3 seconds.');

  return <p>Customers Page</p>;
}
