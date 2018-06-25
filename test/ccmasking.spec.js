const ccmask = require('../ccmasking');
const a = "abcd-efgh-ijkl-mnop";
const b = "123456";
const c = "12345678901";
const d = "abcd1234567890asjdnakj89askdjk";
const e = "1234-SKIP-5678-9101";
describe("cc masking", () => {
  it("A", () => {
      expect(ccmask(a)).toBe("abcd-efgh-ijkl-mnop");
    }
  );
  xit("B", () => {
      expect(ccmask(a)).toBe("1**3456");
    }
  );
  xit("C", () => {
      expect(ccmask(a)).toBe("1######8901");
    }
  );
  xit("D", () => {
    expect(ccmask(a)).toBe("abcd##########asjdnakj89askdjk");
    }
  );
  xit("E", () => {
    expect(ccmask(a)).toBe("1###-SKIP-####-9101");
    }
  );
});