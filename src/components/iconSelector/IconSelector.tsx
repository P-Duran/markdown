import * as Icons from "@mui/icons-material/";
import Search from "@mui/icons-material/Search";
import {
  Grid,
  IconButton,
  Stack,
  SvgIcon,
  Typography
} from "@mui/material";
import React, { memo, useCallback, useEffect, useState } from "react";
import { FixedSizeList } from "react-window";
import { FieldInput } from "../form/FieldInput";

interface Props {
  onChange?: (selectedIcon: string) => void;
  icon?: string;
}

const iconsToIgnore = ["Sharp", "Outlined", "Rounded", "TwoTone"];

export const IconSelector = memo(({ onChange = () => {}, icon }: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<string>();
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    setSelectedIcon(icon);
  }, [icon]);

  const handleOnChange = useCallback(
    (key: string) => {
      onChange(key);
      !icon && setSelectedIcon(key);
    },
    [icon, onChange]
  );

  const icons: any[][] = Object.entries(Icons)
    .filter(
      ([key]) =>
        !iconsToIgnore.some((sufix) => key.includes(sufix)) &&
        (!search || key.toLowerCase().includes(search.toLocaleLowerCase()))
    )
    .reduce(
      (rows: any[], key, index) =>
        (index % 3 === 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows,
      []
    );

  return (
    <Stack spacing={2}>
      <FieldInput
        label="Search Icon"
        onChange={setSearch}
        onChangeDelay={700}
        startAdornment={<Search />}
      />
      <FixedSizeList
        height={150}
        width={400}
        itemSize={70}
        itemCount={icons.length}
        overscanCount={5}
        style={{ overflowX: "hidden" }}
      >
        {({ index, style }) => (
          <Grid container style={style} key={index}>
            {icons[index].map(([key, value]: any) => (
              <Grid item sm={4} key={key}>
                <Stack alignItems="center">
                  <IconButton
                    onClick={() => handleOnChange(key)}
                    sx={
                      key === selectedIcon
                        ? {
                            backgroundColor: "primary.light",
                            color: "primary.main",
                          }
                        : {}
                    }
                  >
                    <SvgIcon fontSize="large">
                      {React.createElement(value)}
                    </SvgIcon>
                  </IconButton>

                  <Typography variant="caption" sx={{ fontSize: 10 }}>
                    {key}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        )}
      </FixedSizeList>
    </Stack>
  );
});
