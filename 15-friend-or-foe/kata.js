function friend(friends) {
  const fourLetterNames = friends.filter((friend) => friend.length === 4);

  return fourLetterNames;
}

export default friend;
