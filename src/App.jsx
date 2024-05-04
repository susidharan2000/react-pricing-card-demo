import Cards from "./Components/Cards/Cards";

function App() {
  const data = [
    {
      title: "FREE",
      price: "$0/month",
      user: "Single User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Project",
      access: "Community Access",
      privateProject: "Unlimited Private Project",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      status: "Monthly Status report",
      IsprivateProject:false,
      Issupport:false,
      Isdomain:false,
      Isstatus:false
    },
    {
      title: "PLUS",
      price: "$9/month",
      user: "5 User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Project",
      access: "Community Access",
      privateProject: "Unlimited Private Project",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      status: "Monthly Status report",
      IsprivateProject:true,
      Issupport:true,
      Isdomain:true,
      Isstatus:false
    },
    {
      title: "PRO",
      price: "$49/month",
      user: "Unlimited User",
      storage: "50GB Storage",
      publicProjects: "Unlimited Public Project",
      access: "Community Access",
      privateProject: "Unlimited Private Project",
      support: "Dedicated Phone Support",
      domain: "Free Subdomain",
      status: "Monthly Status report",
      IsprivateProject:true,
      Issupport:true,
      Isdomain:true,
      Isstatus:true
    },
  ];
  return (
    <>
      <Cards data={data} />
    </>
  );
}

export default App;
