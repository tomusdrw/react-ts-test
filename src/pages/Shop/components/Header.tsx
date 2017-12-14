import * as React from 'react';

interface SortButtonProps {
  by: string;
  active: string;
  reverse: boolean;
  onSort: (field: string, rev: boolean) => void;
  children: string | JSX.Element | JSX.Element[];
}

export const SortButton = ({ by, active, reverse, onSort, children }: SortButtonProps) => (
  <button
    className={active === by ? 'active' : ''}
    onClick={() => onSort(by, !reverse)}
  >
    <i>{reverse ? '▲' : '▼'}</i>
    {children}
  </button>
);

interface HeaderProps {
  sort: string;
  reverse: boolean;
  search: string;
  onSort: (field: string, rev: boolean) => void;
  onSearch: (search: string) => void;
}

export const Header = ({ sort, reverse, search, onSort, onSearch }: HeaderProps) => (
  <div className="header">
    <input
      type="text"
      placeholder="Search..."
      onInput={e => onSearch((e.target as HTMLInputElement).value)}
      value={search}
    />
    <div>
        <SortButton
          by="name"
          active={sort}
          reverse={reverse}
          onSort={onSort}
        >
          Name
        </SortButton>
        <SortButton
          by="price"
          active={sort}
          reverse={reverse}
          onSort={onSort}
        >
          Price
        </SortButton>
    </div>
  </div>
);
