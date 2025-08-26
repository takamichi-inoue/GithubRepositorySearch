export const ListResult = ({
  totalCount,
  perPage,
  page,
  itemsLength,
}: {
  totalCount: number;
  perPage: number;
  page: number;
  itemsLength: number;
}) => {
  return (
    <p className="font-size-sm">
      {totalCount > 0 && (
        <span>
          {`Showing ${perPage * (page - 1) + 1} to ${
            perPage * (page - 1) + itemsLength
          } of `}
        </span>
      )}
      <span>{`${totalCount || 0} results`}</span>
    </p>
  );
};
