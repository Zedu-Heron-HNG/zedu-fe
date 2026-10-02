import { Github } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import type { Contributor } from "../_lib/contributors";

type ContributorsTableProps = {
  contributors: Contributor[];
};

export const ContributorsTable = ({ contributors }: ContributorsTableProps) => {
  return (
    <div className="w-full overflow-hidden rounded-xl border border-neutral-200 text-left">
      <Table>
        <TableHeader className="bg-neutral-100">
          <TableRow>
            <TableHead className="w-10 px-3 text-neutral-600 sm:w-12 sm:px-4">
              #
            </TableHead>
            <TableHead className="px-3 text-neutral-600 sm:px-4">
              Name
            </TableHead>
            <TableHead className="px-3 text-neutral-600 sm:px-4">
              Zedu username
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contributors.map(({ name, zeduUsername, role, github }, index) => (
            <TableRow key={name}>
              <TableCell className="px-3 text-neutral-500 sm:px-4">
                {index + 1}
              </TableCell>
              <TableCell className="px-3 font-medium text-neutral-900 sm:px-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="[overflow-wrap:anywhere]">{name}</span>
                  {role && (
                    <span className="rounded-full bg-primary-500/10 px-2 py-0.5 text-xs font-medium text-primary-500">
                      {role}
                    </span>
                  )}
                  {github && (
                    <a
                      href={`https://github.com/${github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`GitHub: ${github}`}
                      className="text-neutral-500 transition-colors hover:text-neutral-900"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </TableCell>
              <TableCell className="px-3 text-neutral-600 [overflow-wrap:anywhere] sm:px-4">
                {zeduUsername ? `@${zeduUsername}` : "—"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
