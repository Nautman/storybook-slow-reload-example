import Badge from '@material-ui/core/Badge';
import Checkbox from '@material-ui/core/Checkbox';
import CommentIcon from '@material-ui/icons/Comment';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { MinimumNotificationProps } from './types';
import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

interface NonLoadingProps extends MinimumNotificationProps {
  loading?: false;
  link?: string;
  checked?: boolean;
  onCheckboxChange?: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
}

export type NotificationListItemProps =
  | {
      loading: true;
    }
  | NonLoadingProps;

const NotificationListItem = (props: NotificationListItemProps) => (
  <ListItem button to={!props.loading && props.link ? props.link : ''}>
    <ListItemAvatar>
      {props.loading ? (
        <Skeleton height={40} variant="circle" width={40} />
      ) : props.read ? (
        <CommentIcon />
      ) : (
        <Badge badgeContent=" " color="secondary" variant="dot">
          <CommentIcon />
        </Badge>
      )}
    </ListItemAvatar>
    <ListItemText
      primary={props.loading ? <Skeleton variant="text" /> : props.type}
      secondary={props.loading ? <Skeleton variant="text" /> : props.at.toDateString()}
    />
    {props.loading !== true && (
      <ListItemSecondaryAction>
        <Checkbox
          checked={props.checked}
          edge="end"
          inputProps={{ 'aria-labelledby': 'select notification' }}
          onChange={props.onCheckboxChange}
        />
      </ListItemSecondaryAction>
    )}
  </ListItem>
);

export default NotificationListItem;
