import { prop, getModelForClass } from "@typegoose/typegoose";

class Candidate {
  @prop()
  candidate: any;
}

const CandidateModel = getModelForClass(Candidate);

export default CandidateModel;
