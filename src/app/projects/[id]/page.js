import ProjectItem from "@/app/components/ProjectItem";

export async function generateMetadata({ params, searchParams }) {
  const project = await fetchData(params.id);
  return {
    title: project.name,
    description: project.desc,
  };
}

export async function generateStaticParams() {
  const res = await fetch(
    "https://projectsforportfolio-cd82.restdb.io/rest/projectsru",
    {
      headers: {
        "X-Apikey": "66dcef06dbf605e962c7168d",
      },
    }
  ).then((res) => res.json());

  return res?.map((project) => ({
    id: project.id.toString(),
  }));
}

async function fetchData(id) {
  const res = await fetch(
    "https://projectsforportfolio-cd82.restdb.io/rest/projectsru",
    {
      headers: {
        "X-Apikey": "66dcef06dbf605e962c7168d",
      },
    }
  ).then((res) => res.json());

  let project = res.find((project) => project.id === Number(id));
  return { project: project, length: res.length };
}

const Project = async ({ params }) => {
  const data = await fetchData(params.id);

  return <ProjectItem project={data.project} length={data.length} />;
};

export default Project;
