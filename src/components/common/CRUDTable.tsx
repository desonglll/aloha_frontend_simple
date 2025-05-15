function CRUDTable({ baseURL }: { baseURL: string }) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <td>
              <a
                className={"px-1 underline text-cyan-600"}
                href={`/${baseURL}/create`}
              >
                Create
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default CRUDTable;
