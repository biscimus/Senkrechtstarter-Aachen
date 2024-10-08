import SchoolForm from "@/app/components/schools/SchoolForm";

import { fetchUsers } from "@/app/lib/data";

export default async function Page() {
    const users = await fetchUsers();
    return (
        <div>
            {/* <Breadcrumbs underline="none" radius="full" variant="solid">
                <BreadcrumbItem href="/schools">All Schools</BreadcrumbItem>
                <BreadcrumbItem href="/schools/create">
                    Add a School
                </BreadcrumbItem>
            </Breadcrumbs> */}
            <SchoolForm users={users} />
        </div>
    );
}
