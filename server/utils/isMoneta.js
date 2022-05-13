function isMoneta(name) {
  const withoutSpacesName = name.replace(/\s/g, '');
  return /^.*[мМm]+[оО]+[нН|nh]+[еЕe]+[тТt]+[оО]+([чЧ]|ch)+[кКk]+[аАa]+.*$/i.test(withoutSpacesName);
}

module.exports = isMoneta;
