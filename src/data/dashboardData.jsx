import { v4 as uuidv4 } from "uuid";

export const Categoris = [
  {
    id: uuidv4(),
    category: "CSPM Executive Dashboard",
    widgets: [
      {
        id: uuidv4(),
        name: "Cloud Accounts",
        graph: "pieChart1",
        isShow:true
      },
      {
        id: uuidv4(),
        name: "Cloud Account Risk Assessment",
        graph: "pieChart2",
        isShow:true
      },
    ],
  },
  {
    id: uuidv4(),
    category: "CWPP Dashboard",
    widgets: [
      {
        id: uuidv4(),
        name: "Top 5 Namespace Specific Alerts",
        graph: "",
        isShow:true
      },
      {
        id: uuidv4(),
        name: "Workload Alerts",
        graph: "",
        isShow:true
      },
    ],
  },
  {
    id: uuidv4(),
    category: "Registry Scan",
    widgets: [
      {
        id: uuidv4(),
        name: "Image Risk Assessment",
        graph: "lineChart1",
        isShow:true
      },
      {
        id: uuidv4(),
        name: "Image Security Issues",
        graph: "lineChart2",
        isShow:true
      },

    ],
  },

];
