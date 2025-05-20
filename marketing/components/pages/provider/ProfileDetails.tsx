import { FC, ReactElement, useEffect, useMemo, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

import Avatar from "@marketing/components/ui/Avatar";
import Button from "@marketing/components/ui/Button";
import Card, { CardContent, CardHeader } from "@marketing/components/ui/Card";
import Drawer, {
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@marketing/components/ui/Drawer";
import { Provider } from "@shared/graphql/__generated__/graphql";
import { useAppData } from "@shared/graphql/queries/app/useAppData";

interface ProfileDetailsProps {
  profile: Provider;
  onClose: () => void;
}

const ProfileDetails: FC<ProfileDetailsProps> = ({
  profile,
  onClose,
}): ReactElement => {
  const [open, setOpen] = useState<boolean>(false);
  const { data } = useAppData({ fetchPolicy: "cache-first" });
  const { appData: { SubjectArea } = {} } = data ?? {};
  const subjectAreaMap = useMemo(() => {
    return (
      SubjectArea?.reduce(
        (acc, area) => {
          acc[area.value] = area.label;
          return acc;
        },
        {} as Record<string, string>,
      ) ?? {}
    );
  }, [SubjectArea]);

  useEffect(() => {
    if (profile) setOpen(true);
  }, [profile]);

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <Drawer open={open} onClose={handleClose} direction="right">
      <DrawerContent
        className="w-full max-w-[440px] inset-y-0 right-0 font-inter bg-transparent"
        aria-describedby={undefined}>
        <DrawerHeader className="hidden">
          <DrawerTitle />
        </DrawerHeader>
        <div className="mx-auto w-full">
          <Card className="bg-background-2">
            <CardHeader className="flex flex-row justify-between items-center p-4">
              <p className="text-sm font-semibold text-foreground-1">
                Provider Details
              </p>
              <Button variant="icon" className="p-1" onClick={handleClose}>
                <XMarkIcon className="size-5 text-foreground-1" />
              </Button>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center gap-8 px-6 md:px-12 pb-4">
              <div className="bg-white rounded flex flex-col gap-4 p-8 mb-6">
                <div className="flex gap-4 items-center flex-wrap">
                  <Avatar className="size-14" provider={profile} />
                  <div className="text-sm font-semibold">
                    <p className="text-primary">{`Dr. ${profile.firstName} ${profile.lastName}`}</p>
                    <p className="text-foreground">
                      License Number: {profile.licenses[0].identifier}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col gap-2 text-sm font-semibold">
                    <p className="text-primary">Specialty</p>
                    <p className="text-foreground">
                      {subjectAreaMap[profile.providerData.specialty]}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm font-semibold">
                    <p className="text-primary">States Serviced</p>
                    <p className="text-foreground">
                      {profile.licenses
                        .map((license) => license.location)
                        .join(", ")}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col gap-2 text-sm font-semibold">
                    <p className="text-primary">States Serviced</p>
                    <p className="text-foreground">
                      {profile.providerData.state}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm font-semibold">
                    <p className="text-primary">Zip Code</p>
                    <p className="text-foreground">
                      {profile.providerData.zip}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col gap-2 text-sm font-semibold">
                    <p className="text-primary">MHNTI Badges</p>
                    <p className="text-foreground"></p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col gap-2 text-sm font-semibold">
                    <p className="text-primary text-nowrap">
                      1-on-1 MHNTI Consults
                    </p>
                    <p className="text-foreground">{profile.privateConsults}</p>
                  </div>
                </div>
              </div>
              <div className="max-w-xs text-sm font-semibold px-8">
                <p className="text-foreground-1">
                  Want to update this information?
                </p>
                <p className="text-foreground">
                  Log into your MHNTI account and update your Find a Provider
                  settings
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default ProfileDetails;
