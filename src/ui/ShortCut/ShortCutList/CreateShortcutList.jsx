import { useForm } from "react-hook-form";

import Form from "../../../ui/Form";
import FormRow from "../../FormRow";
import CancelBtn from "../../CancelBtn";
import ButtonContainer from "../../ButtonContainer";
import CreateBtn from "../../CreateBtn";
import DynamicIcon from "../../../Components/DynamicIcon";
import loadIcon from "../../../utils/loadIcon";

import { useToggleContext } from "../../../context/ToggleSidebarContext";
import { useShortcutList } from "../../../context/ShortcutContext";

function CreateShortcutList({ onCloseModal }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { theme } = useToggleContext();
  const { shortcutList, setShortcutList } = useShortcutList();
  console.log(errors);

  const onSubmit = (data) => {
    const { listName, content, path, title, library, icon } = data;

    setShortcutList([
      ...shortcutList,
      {
        listName,
        content,
        path,
        title,
        icon: <DynamicIcon library={library} iconName={icon} size={23} />,
      },
    ]);

    // close the modal if there is no error
    onCloseModal();
  };

  return (
    <Form onSubmitHandler={handleSubmit(onSubmit)}>
      <FormRow label={"list name"} error={errors?.listName?.message}>
        <input
          type="text"
          placeholder="side bar label e.g dashboards"
          id="listName"
          {...register("listName", {
            required: "The list name field is required",
          })}
          className={`rounded-md border px-4 py-2 ${theme === "light" ? "border-slate-300 text-slate-500" : "text-slate-200 dark:border-slate-500"} focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:bg-transparent dark:placeholder:text-slate-400`}
        />
      </FormRow>
      <FormRow label={"title"} error={errors?.title?.message}>
        <input
          type="text"
          placeholder="dashboard"
          id="title"
          {...register("title", {
            required: "The title field is required",
          })}
          className={`rounded-md border px-4 py-2 ${theme === "light" ? "border-slate-300 text-slate-600" : "dark:border-slate-500 dark:text-slate-200"} focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:bg-transparent dark:placeholder:text-slate-400`}
        />
      </FormRow>
      <FormRow label={"content"} error={errors?.content?.message}>
        <input
          type="text"
          placeholder="appointments"
          id="content"
          {...register("content", {
            required: "The content field is required",
          })}
          className={`rounded-md border px-4 py-2 ${theme === "light" ? "border-slate-300 text-slate-600" : "text-slate-200 dark:border-slate-500"} focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:bg-transparent dark:placeholder:text-slate-400`}
        />
      </FormRow>
      <FormRow label={"Path"} error={errors?.path?.message}>
        <input
          type="text"
          placeholder="/analytics"
          id="path"
          {...register("path", {
            required: "The path field is required",
          })}
          className={`rounded-md border px-4 py-2 ${theme === "light" ? "border-slate-300 text-slate-600" : "text-slate-200 dark:border-slate-500"} focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:bg-transparent dark:placeholder:text-slate-400`}
        />
      </FormRow>
      <FormRow label={"library icon"} error={errors?.library?.message}>
        <input
          type="text"
          placeholder="e.g, fa, io, md"
          id="libraryIcon"
          {...register("library", {
            required: "The library icon field is required",
          })}
          className={`rounded-md border px-4 py-2 ${theme === "light" ? "border-slate-300 text-slate-600" : "text-slate-200 dark:border-slate-500"} focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:bg-transparent dark:placeholder:text-slate-400`}
        />
      </FormRow>
      <FormRow label={"icon name"} error={errors?.icon?.message}>
        <input
          type="text"
          placeholder="e.g FaSnapchat"
          id="iconName"
          {...register("icon", {
            required: "The icon name field is required",
          })}
          className={`rounded-md border px-4 py-2 ${theme === "light" ? "border-slate-300 text-slate-600" : "text-slate-200 dark:border-slate-500"} focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 dark:bg-transparent dark:placeholder:text-slate-400`}
        />
      </FormRow>
      <ButtonContainer>
        <CancelBtn />
        <CreateBtn>Create</CreateBtn>
      </ButtonContainer>
    </Form>
  );
}

export default CreateShortcutList;
