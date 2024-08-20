import { deleteSchool } from "@/app/lib/actions";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Button } from "@nextui-org/react";
import Link from "next/link";

export function UpdateReportButton({
    schoolId,
    id,
}: {
    schoolId: string;
    id: string;
}) {
    return (
        <Link href={`/schools/${schoolId}/reports/${id}/edit`}>
            <Button isIconOnly>
                <PencilIcon className="w-5" />
            </Button>
        </Link>
    );
}

export function DeleteReportButton({ id }: { id: string }) {
    const deleteReportWithId = deleteSchool.bind(null, id);
    return (
        <form action={deleteReportWithId}>
            <Button color="danger" isIconOnly>
                <TrashIcon className="w-5" />
            </Button>
        </form>
    );
}
