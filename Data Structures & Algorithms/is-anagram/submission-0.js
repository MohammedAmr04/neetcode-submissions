class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
          const m1 = new Map();
  const m2 = new Map();
  for (let i = 0; i < s.length; i++) {
    if (m1.has(s[i])) {
      m1.set(s[i], m1.get(s[i]) + 1);
    } else {
      m1.set(s[i], 1);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (m2.has(t[i])) {
      m2.set(t[i], m2.get(t[i]) + 1);
    } else {
      m2.set(t[i], 1);
    }
  }
  if (m1.size !== m2.size) {
    return false;
  }
  for (const e of m1) {
    if (m2.has(e[0])) {
      if (m2.get(e[0]) !== e[1]) return false;
    } else {
      return false;
    }
  }
  for (const e of m2) {
    if (m1.has(e[0])) {
      if (m1.get(e[0]) !== e[1]) return false;
    } else return false;
  }
  return true;
    }    
}
