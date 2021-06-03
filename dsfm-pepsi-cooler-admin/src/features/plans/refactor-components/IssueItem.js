import React from 'react';

import Cooler from './Cooler';
import NoteUnsuccess from './NoteUnsuccess';
import StoreUpdate from './StoreUpdate';

const IssueItem = ({ issueKey, path, ...issueData }) => {
  const data = {
    ...issueData,
    path: `${path}.${issueKey}`
  };

  switch (issueKey) {
    case 'STORE_UPDATE': {
      return <StoreUpdate {...data} />
    }

    case 'NOTE_UNSUCCESS': {
      return <NoteUnsuccess {...data} />
    }

    case 'COOLER': {
      return <Cooler {...data} />
    }

    case 'COOLER_EXTRA': {
      return <Cooler {...data} />
    }

    default: {
      return null;
    }
  }
}

export default IssueItem
