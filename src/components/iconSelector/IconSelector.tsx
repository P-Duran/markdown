import { Grid, IconButton, Stack, SvgIcon, Typography } from "@mui/material";
import React, { memo, useCallback, useEffect, useState } from "react";
import { FieldInput } from "../form/FieldInput";
import { LazyLoad } from "../lazyLoad/LazyLoad";
import * as Icons from "@mui/icons-material/";
import Search from "@mui/icons-material/Search";

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

  return (
    <Stack spacing={2}>
      <FieldInput
        label="Search Icon"
        onChange={setSearch}
        onChangeDelay={700}
        startAdornment={<Search />}
      />
      <Grid
        container
        sx={{
          height: 150,
          width: 400,
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        {Object.entries(Icons)
          .filter(
            ([key]) =>
              !iconsToIgnore.some((sufix) => key.includes(sufix)) &&
              (!search ||
                key.toLowerCase().includes(search.toLocaleLowerCase()))
          )
          .map(([key, value]) => (
            <Grid item sm={4} key={key}>
              <LazyLoad>
                {(isVisible, ref) =>
                  isVisible ? (
                    <Stack ref={ref} alignItems="center">
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
                  ) : (
                    <div ref={ref} style={{ height: 51, width: 51 }}></div>
                  )
                }
              </LazyLoad>
            </Grid>
          ))}
      </Grid>
    </Stack>
  );
});
