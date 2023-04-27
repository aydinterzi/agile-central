import React from "react";
import prisma from "@/libs/prisma";
import Report from "./Report";
const getReports = async () => {
  const reports = await prisma.report.findMany();
  console.log(reports);
  return reports;
};
const ListReport = async () => {
  const reports = await getReports();
  return (
    <div>
      {reports.map((report) => {
        return (
          <div key={report.id}>
            <Report description={report.description} />
          </div>
        );
      })}
    </div>
  );
};

export default ListReport;
