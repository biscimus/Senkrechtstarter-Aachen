import SchoolForm from "@/app/components/schools/school-form";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import {
    fetchParticipants,
    fetchReport,
    fetchReports,
    fetchSchool,
    fetchUsers,
} from "@/app/lib/data";
import ReportForm from "@/app/components/reports/ReportForm";

export default async function Page({
    params,
}: {
    params: { schoolId: string; reportId: string };
}) {
    const [report, school, users, participants] = await Promise.all([
        fetchReport(params.reportId),
        fetchSchool(params.schoolId),
        fetchUsers(),
        fetchParticipants(params.reportId),
    ]);

    return (
        <div className="p-6">
            {/* <Breadcrumbs underline="none" radius="full" variant="solid">
                <BreadcrumbItem href="/schools">All Schools</BreadcrumbItem>
                <BreadcrumbItem href="/schools/create">
                    Add a School
                </BreadcrumbItem>
            </Breadcrumbs> */}
            <ReportForm
                report={report!}
                users={users}
                school={school!}
                participants={participants}
            />
        </div>
    );
}
