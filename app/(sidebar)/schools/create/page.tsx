import SchoolForm from "@/app/ui/schools/school-form";
import Breadcrumbs from "@/app/ui/breadcrumbs";
import { fetchUsers } from "@/app/lib/data";
import { CustomerField } from "@/app/lib/types";

export default async function Page() {
    const users = await fetchUsers();

    return (
        <div>
            <Breadcrumbs
                breadcrumbs={[
                    { label: "All Schools", href: "/schools" },
                    {
                        label: "Add a School",
                        href: "/schools/create",
                        active: true,
                    },
                ]}
            />
            <SchoolForm users={users} />
        </div>
    );
}
