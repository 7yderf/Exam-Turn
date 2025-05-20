"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { HomeIcon } from "@heroicons/react/24/outline";

import { columns } from "@marketing/components/pages/provider/Columns";
import Button from "@marketing/components/ui/Button";
import Card, { CardContent } from "@marketing/components/ui/Card";
import DataTable from "@marketing/components/pages/provider/DataTable";
import Select from "@marketing/components/ui/Select";
import SearchInput from "@marketing/components/common/Inputs/SearchInput";
import ScrollArea, { ScrollBar } from "@marketing/components/ui/ScrollArea";

import { useAppData } from "@shared/graphql/queries/app/useAppData";
import { useFindProvider } from "@shared/graphql/queries/app/useFindProvider";
import { SubjectArea } from "@shared/graphql/__generated__/graphql";
import { cn } from "@shared/lib/utils";

const Providers = () => {
  const [search, setSearch] = useState("");
  const [speciality, setSpecialty] = useState<SubjectArea | "all">("all");
  const { data: appData } = useAppData();
  const { data: providerData, refetch } = useFindProvider({
    variables: { search },
  });
  const { providerSearch = [] } = providerData ?? {};

  const specialityOptions = useMemo(() => {
    const { appData: { SubjectArea = [] } = {} } = appData ?? {};
    return [{ label: "All Specialties", value: "all" }, ...SubjectArea];
  }, [appData]);

  useEffect(() => {
    refetch({
      search,
      area: speciality === "all" ? undefined : speciality,
    });
  }, [search, speciality]);

  return (
    <main>
      <div className="w-[70px] h-screen fixed left-0 top-0">
        <div className="w-full h-full flex justify-center bg-background pt-40">
          <Button
            variant="icon"
            className="bg-primary hover:bg-primary/90 size-10 p-2 text-white"
            asChild>
            <Link href="/">
              <HomeIcon className="size-8" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="ml-[70px]">
        <header className="flex justify-between px-8 py-12">
          <h1 className="text-3xl md:text-4xl font-semibold text-primary font-inter">
            Find a Provider
          </h1>
        </header>
        <div>
          <Card className="rounded-md overflow-hidden p-0 text-gray-900 shadow-none">
            <CardContent className="p-0">
              <ScrollArea className="w-[calc(100svw-70px)] md:w-[calc(100svw-70px)]">
                <div className="w-full">
                  <div className="flex">
                    <div className="w-full px-8 pb-8">
                      <div
                        className={cn(
                          "flex flex-1 justify-between items-center pb-6",
                        )}>
                        {
                          <SearchInput
                            value={search}
                            onChange={(event) => setSearch(event.target.value)}
                          />
                        }
                      </div>
                      <div className="flex max-w-40 pb-6">
                        <Select
                          defaultValue="all"
                          value={speciality}
                          options={specialityOptions}
                          onValueChange={(value: SubjectArea | "all") =>
                            setSpecialty(value)
                          }
                        />
                      </div>
                      <DataTable columns={columns} data={providerSearch} />
                    </div>
                  </div>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
};

function PageWithApollo() {
  const makeClient = useMemo(() => {
    const client = new ApolloClient({
      uri: process.env.NEXT_PUBLIC_GRAPHQL_URI ?? "",
      cache: new InMemoryCache(),
    });

    return client;
  }, []);

  return (
    <ApolloProvider client={makeClient}>
      <Providers />
    </ApolloProvider>
  );
}

export default React.memo(PageWithApollo);
