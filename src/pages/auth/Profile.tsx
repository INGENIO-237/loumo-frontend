import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function ProfilePage() {
  const OPTIONS = {
    PERSONAL_INFO: "info",
    STORES: "stores",
  };
  return (
    <>
      <Tabs
        defaultValue={OPTIONS.PERSONAL_INFO}
        className="w-full h-[70vh]"
      >
        <TabsList className="w-full justify-center border mb-5">
          <TabsTrigger
            value={OPTIONS.PERSONAL_INFO}
            className="data-[state=active]:bg-gray-100 w-[50%]"
          >
            PERSONAL INFO
          </TabsTrigger>
          <TabsTrigger
            value={OPTIONS.STORES}
            className="data-[state=active]:bg-gray-100 w-[50%]"
          >
            STORES
          </TabsTrigger>
        </TabsList>
        <TabsContent value={OPTIONS.PERSONAL_INFO}>
          Personal information here
        </TabsContent>
        <TabsContent value={OPTIONS.STORES}>Stores here</TabsContent>
      </Tabs>
    </>
  );
}
