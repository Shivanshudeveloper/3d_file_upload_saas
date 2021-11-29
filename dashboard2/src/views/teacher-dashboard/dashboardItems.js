// assets
import {IconDashboard, IconDeviceAnalytics} from "@tabler/icons";

// constant
const icons = {
  IconDashboard,
  IconDeviceAnalytics,
};

// ===========================|| DASHBOARD MENU ITEMS ||=========================== //

const dashboard = [
  {
    id: "dashboard",
    title: "Dashboard",
    type: "group",
    children: [
      {
        id: "class",
        title: "Class",
        type: "item",
        url: "/dashboard/teacher/list",
        icon: icons.IconDashboard,
        breadcrumbs: false,
      },
      {
        id: "report",
        title: "Report",
        type: "item",
        url: "/dashboard/teacher/report",
        icon: icons.IconDashboard,
        breadcrumbs: false,
      },
      {
        id: "certificates",
        title: "Certificates",
        type: "item",
        url: "/dashboard/teacher/list",
        icon: icons.IconDashboard,
        breadcrumbs: false,
      },
      {
        id: "appointment",
        title: "Appointment",
        type: "item",
        url: "/dashboard/teacher/list",
        icon: icons.IconDashboard,
        breadcrumbs: false,
      },
    ],
  },
];

export default dashboard;
