import React from "react";

import {
  AspectRatio,
  Card,
  CardActions,
  CardContent,
  CardCover,
  CardOverflow,
  Chip,
  IconButton,
  List,
  ListItem,
  Stack,
  Dropdown,
  MenuItem,
  MenuButton,
  Menu,
  Typography,
  Avatar,
  Button,
  Tooltip,
  Link,
} from "@mui/joy";
import { Download, Person, Tag } from "@mui/icons-material";

import bg from "../helpers/bg.js";

export default function Skin(props) {
  const {
    fullName,
    name,
    topics,
    description,
    previewImage,
    latestRelease,
    owner,
  } = props;
  const { tagName, uri } = latestRelease;

  const defaultTopics = ["rmskin", "rainmeter", "rainmeter-skin"];
  const filteredTopics = topics.filter(
    (topic) => !defaultTopics.includes(topic)
  );
  const hasTopics = !!filteredTopics.length;

  return (
    <Card id={fullName} variant="soft" className="w-full">
      <CardOverflow>
        <AspectRatio ratio={4 / 2}>
          <img src={previewImage} alt={`Screenshot of ${name}`} />
        </AspectRatio>
      </CardOverflow>
      <CardContent sx={{ justifyContent: "flex-end", position: "relative" }}>
        <Typography level="title-lg">{name}</Typography>
        <Typography>{description}</Typography>
        {/* {hasTopics && (
          <div className="absolute -right-2 -top-8">
            <Dropdown>
              <MenuButton
                startDecorator={<Tag />}
                disabled={!hasTopics}
                variant="soft"
                sx={{ p: 0, pl: 1.5, maxWidth: "36px" }}
              />
              <Menu placement="bottom-end" variant="plain">
                <MenuItem disabled>
                  <Stack
                    direction={"row"}
                    flexWrap={"wrap"}
                    gap={1}
                    sx={{
                      maxWidth: "16rem",
                    }}
                  >
                    {filteredTopics.map((t, i) => (
                      <Chip variant="outlined" key={i}>
                        #{t}
                      </Chip>
                    ))}
                  </Stack>
                </MenuItem>
              </Menu>
            </Dropdown>
          </div>
        )} */}
        <div className="absolute -right-2 -top-8">
          <Tooltip title={owner.name} placement="bottom-end" variant="soft">
            <IconButton variant="plain" sx={{ ...bg }}>
              <Link target="_blank" href={`https://github.com/${owner.name}`}>
                <Avatar src={owner.avatarUrl} sx={{ ...bg }} />
              </Link>
            </IconButton>
          </Tooltip>
        </div>
      </CardContent>
      <CardActions
        sx={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        <Link target="" href={uri}>
          <Button variant="solid" startDecorator={<Download />}>
            Latest
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}
