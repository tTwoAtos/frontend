import { FakeBareCode } from "./FakeBareCode";

export class BareCodeMock {
    public fakeBareCodes: FakeBareCode[] = [
        new FakeBareCode("123456", "Banane", 2),
        new FakeBareCode("168452", "Chocolat", 5),
        new FakeBareCode("975801", "Pomme", 8)
    ];
}
