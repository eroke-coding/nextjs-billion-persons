import { Suspense } from "react";
import PersonInfo, { getPerson } from "../../../../components/person-info";

interface IParams {
  params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
  const person = await getPerson(id);
  return {
    title: person.name,
  };
}

export default async function PersonInfoPage({ params: { id } }: IParams) {
  return (
    <div>
      <Suspense fallback={<h1>Loading person info</h1>}>
        <PersonInfo id={id} />
      </Suspense>
    </div>
  );
}
