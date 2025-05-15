function NavigateToEditPageButton({
  id,
  action,
}: {
  id: string;
  action: (id: string) => void | Promise<void>;
}) {
  return (
    <>
      <button
        className={'border mx-1 px-1 cursor-pointer'}
        onClick={() => {
          action(id);
        }}
      >
        Edit
      </button>
    </>
  );
}

export default NavigateToEditPageButton;
