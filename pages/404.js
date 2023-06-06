import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Error() {
  const router = useRouter();
  useEffect(() => {
    console.log(router);
    router.push("/");
  }, []);
  return <div>НЕСУЩЕСТВУЮЩАЯ СТРАНИЦА</div>;
}
