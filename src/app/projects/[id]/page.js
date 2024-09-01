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
    "https://projectsforportfolio-cd82.restdb.io/rest/projects",
    {
      headers: {
        "X-Apikey": "66d45387b1ce271d1d4e44e4",
      },
    }
  ).then((res) => res.json());

  return res?.map((project) => ({
    id: project.id.toString(),
  }));
}

async function fetchData(id) {
  const res = await fetch(
    "https://projectsforportfolio-cd82.restdb.io/rest/projects",
    {
      headers: {
        "X-Apikey": "66d45387b1ce271d1d4e44e4",
      },
    }
  ).then((res) => res.json());

  let project = res.find((project) => project.id === Number(id));
  console.log(project.img);
  return project;
}

const Project = async ({ params }) => {
  const project = await fetchData(params.id);

  return <ProjectItem project={project} />;
};

export default Project;
