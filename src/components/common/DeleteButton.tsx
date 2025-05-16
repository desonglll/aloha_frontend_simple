import type { AxiosResponse } from 'axios';

function DeleteButton({
  buttonText,
  name,
  id,
  action,
  callback,
}: {
  buttonText: string | 'delete';
  name: string;
  id: string;
  action: (id: string) => Promise<AxiosResponse>;
  callback: () => Promise<void> | void;
}) {
  return (
    <>
      <button
        className="border mx-1 px-1 cursor-pointer"
        onClick={() => {
          if (!id) return;
          const confirmed = window.confirm(
            `Are you sure you want to delete ${name} with id "${id}"?`
          );
          if (confirmed) {
            action(id)
              .then(response => {
                if (response.status === 200) {
                  callback();
                } else {
                  alert(`Failed to delete ${name} with id ${id}.`);
                }
              })
              .catch(() => {
                alert(`Error occurred while delete ${name} with id ${id}.`);
              });
          }
        }}
      >
        {buttonText}
      </button>
    </>
  );
}

export default DeleteButton;
