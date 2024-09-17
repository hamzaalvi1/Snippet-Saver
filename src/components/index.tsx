import dynamic from "next/dynamic";

import Chip from "./Chip/Chip";
import Logo from "./Logo/Logo";
import Appbar from "./Appbar/Appbar";
import Avatar from "./Avatar/Avatar";
import Button from "./Button/Button";
import Sidebar from "./Sidebar/Sidebar";
import Checkbox from "./Checkbox/Checkbox";
import Provider from "./Provider/Provider";
import Searchbox from "./Searchbox/Searchbox";
import InputField from "./InputField/InputField";
import AddSnippet from "./CodeSnippet/AddSnippet";
import CodeSnippet from "./CodeSnippet/CodeSnippet";
import ClientRender from "./ClientRender/ClientRender";
import AutoComplete from "./AutoComplete/AutoComplete";
import * as Skeleton from "./Skeleton";

const CodeEditor = dynamic(() => import("./CodeEditor/CodeEditor"), {
  ssr: false,
});

export {
  Chip,
  Logo,
  Avatar,
  Button,
  Appbar,
  Sidebar,
  Checkbox,
  Provider,
  Skeleton,
  Searchbox,
  CodeEditor,
  InputField,
  AddSnippet,
  CodeSnippet,
  AutoComplete,
  ClientRender,
};
