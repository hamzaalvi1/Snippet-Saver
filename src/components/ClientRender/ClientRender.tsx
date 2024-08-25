"use client";
import { useIsClient } from "usehooks-ts";

interface IClientRenderProps {
  children: React.ReactNode;
  loadingComponent: React.ReactElement;
}
const ClientRender: React.FC<IClientRenderProps> = (props) => {
  const isClient = useIsClient();
  const { children, loadingComponent } = props;
  return <>{isClient ? children : loadingComponent}</>;
};

export default ClientRender;
