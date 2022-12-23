import React from "react";
import useBreakpoints from "~/hooks/useBreakpoints";
import OrderControlsItem from '../OrderControlsItem';

function OrderControls({
  search,
  setSearch,
}) {
  const breakpoints = useBreakpoints();

  const controlItems = [
    {
      title: 'Lançamento',
      sort: 'year',
    },
    {
      title: 'Nome',
      sort: 'title',
    },
    {
      title: 'País',
      sort: 'country',
    },
  ];

  const handleChangeOrder = (sort) => {
    const newOrder = {
      sort: search.sort,
      order: search.order,
    };

    if (search.sort === sort) {
      if (search.order === 'asc') {
        newOrder.order = 'desc';
      } else {
        newOrder.order = 'asc';
      }
    } else {
      newOrder.sort = sort;
      newOrder.order = 'asc';
    }

    setSearch(newOrder);
  };

  return (
    <>
      {
        controlItems.map((item, index) => (
          <OrderControlsItem
            className={index === controlItems.length - 1 || breakpoints.xs ? '' : 'mr-10'}
            key={index}
            onClick={handleChangeOrder}
            sort={item.sort}
            search={search}
          >
            {item.title}
          </OrderControlsItem>
        ))
      }
    </>
  );
}

export default OrderControls;
