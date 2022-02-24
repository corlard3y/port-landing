import { Fragment } from "react";
import { MdOutlineVideoSettings } from "react-icons/md";

const Projects = () => {
  const Projects = [
    {
      title: "myPaddi Analytics Tool",
      body: `This is an analytics tool for the myPaddi app. myPaddi app gives
            young people access to much needed sexual and reproductive health
            information and products while ensuring complete anonymity. myPaddi
            is an app thats helps you find great insights on sex,
            contraceptives, abuse, health and everything in between and gain
            great insights with ever ready counsellors on standby to tend to
            your pressing and unanswered questions. myPaddi app is available for
            download on Playstore and Appstore.`,
      stack: [`Next JS`, `Redux`, `Tailwind CSS`],
      live: "https://www.analytics.mypaddiapp.com/",
    },
    {
      title: "Mactay Human Recruitment and Management App",
      body: `Mactay Consulting is a management consulting firm in Lekki, Lagos that provides HR services to various clients. This app helps Mactay to manager the process of onboarding, recruitment and management among their various clients. The different managers of each client can perform the basic info required for the recruitment and onboarding process while selected candidates can sign in to complete the recruitment and onboarding process where they fill and submit required information. Afer which, they become employees and can access features like Requests, Payslips and see personal info. The managers and admin monitors these employees with the ESS(Employee Self Service) part of the application.`,
      stack: [`React JS`, `Redux`, `Styled Components`, `Context API`],
      live: "https://employeeportal.mactay.com/",
    },
    {
      title: "Hex-Logistics Merchant Dashboard",
      body: `This is one of the tools in the Hex-logistics Merchandise. This is the Merchant Dashboard for Super-admins on the hex-logistics app to keep a track of Transactions, Deliveries, Payments and Orders and also perform different activities relating to the users, riders and overall settings on the Hex-logistics app`,
      stack: [`React JS`, `Redux`, `Tailwind CSS`],
      live: "https://hexlogistics.ng/merchant-admin/login",
    },
    {
      title: "Hex-Logistics Rider Web App",
      body: `This is also one of the tools in the Hex-logistics Merchandise. This is the web app for Riders to sign up and after the sign up process, they can access all their previous and present orders, transactions and orders.`,
      stack: [`React JS`, `Redux`, `CSS`],
      live: "https://hexlogistics.ng/rider/",
    },
  ];
  return (
    <Fragment>
      <div className="w-11/12 xl:w-8/12 mx-auto py-12">
        {/* <h1 className="bold-font text-center">Company Projects</h1> */}
        {Projects?.map((x, i) => (
          <div
            key={i}
            className="w-full bg-gray-200 dark:bg-gray-900 p-8 mt-12 rounded-md shadow-sm"
          >
            <h1 className="bold-font text-lg text-gray-500 dark:text-gray-500">
              {x?.title}
            </h1>
            <p className="actual-font text-xs lg:text-sm mt-4 leading-6 xl:leading-6 text-gray-500">
              {x?.body}
            </p>
            <div className="mt-4">
              {x?.stack?.map((item, i) => (
                <span className="cards inline-block" key={i}>
                  {item}
                </span>
              ))}
            </div>
            <a
              target="_blank"
              className="blanks"
              href={x?.live}
              rel="noreferrer"
            >
              <MdOutlineVideoSettings size={20} />
              <p className="ml-2">View Live</p>
            </a>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Projects;
