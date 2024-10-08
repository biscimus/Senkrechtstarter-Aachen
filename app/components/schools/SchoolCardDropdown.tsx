"use client";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

import { useRouter } from "next/navigation";
import { deleteSchool, toggleEmailSent } from "../../lib/actions";
import { useSession } from "next-auth/react";
import { ActionIcon, Menu } from "@mantine/core";

export default function SchoolCardDropdown({ school }: { school: any }) {
    const router = useRouter();
    const { data: session, status } = useSession();
    return (
        <Menu withArrow position="right-start" offset={15}>
            <Menu.Target>
                <ActionIcon variant="transparent" m="xs">
                    <EllipsisVerticalIcon />
                </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
                <Menu.Item
                    key="reports"
                    onClick={() => {
                        router.push(`/schools/${school.id}/reports`);
                    }}>
                    Berichte Ansehen
                </Menu.Item>
                <Menu.Item
                    key="edit"
                    onClick={() => {
                        router.push(`/schools/${school.id}/edit`);
                    }}>
                    Bearbeiten
                </Menu.Item>
                <Menu.Item
                    key="email-sent"
                    onClick={() => {
                        toggleEmailSent(school.id);
                    }}>
                    {school.email_sent
                        ? "Als unversendet Markieren"
                        : "Als versendet Markieren"}
                </Menu.Item>
                <Menu.Item
                    disabled={!session?.user?.isSpeaker}
                    key="delete"
                    className="text-danger"
                    color="red"
                    onClick={() => deleteSchool(school.id)}>
                    Löschen
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}
