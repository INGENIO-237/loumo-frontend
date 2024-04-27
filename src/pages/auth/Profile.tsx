import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfileInfoForm from "@/forms/auth/ProfileInfoForm";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function ProfilePage() {
  const OPTIONS = {
    PERSONAL_INFO: "info",
    STORES: "stores",
    SETTINGS: "settings",
  };

  const { user } = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Tabs defaultValue={OPTIONS.PERSONAL_INFO} className="w-full h-[70vh]">
        <TabsList className="w-full justify-center border mb-5 rounded">
          <TabsTrigger
            value={OPTIONS.PERSONAL_INFO}
            className="data-[state=active]:bg-gray-100 w-[50%]"
          >
            PERSONAL INFO
          </TabsTrigger>
          {user?.isMerchant && (
            <TabsTrigger
              value={OPTIONS.STORES}
              className="data-[state=active]:bg-gray-100 w-[50%]"
            >
              STORES
            </TabsTrigger>
          )}
          <TabsTrigger
            value={OPTIONS.SETTINGS}
            className="data-[state=active]:bg-gray-100 w-[50%]"
          >
            SETTINGS
          </TabsTrigger>
        </TabsList>
        <TabsContent value={OPTIONS.PERSONAL_INFO}>
          <ProfileInfoForm />
        </TabsContent>
        <TabsContent value={OPTIONS.STORES}>Stores here</TabsContent>
      </Tabs>
    </>
  );
}
