const QUESTIONS = {
  L1: [
    {
      id: "l1_q1",
      question: "The manager wants to _______ the new project next week.",
      options: ["start", "starting", "started", "starter"],
      answer: "start",
      explanation: "หลังโครงสร้าง 'want to' จะต้องตามด้วยกริยาฐาน (infinitive without to) หรือ Verb ช่องที่ 1 เสมอ ดังนั้น 'start' จึงเป็นคำตอบที่ถูกต้อง ในขณะที่ starting เป็น gerund/participle, started เป็นอดีต (V.2/V.3) และ starter เป็นคำนามแปลว่าผู้เริ่มต้นหรือเครื่องสตาร์ท"
    },
    {
      id: "l1_q2",
      question: "We received a _______ report from the finance department yesterday.",
      options: ["detail", "detailed", "details", "detailing"],
      answer: "detailed",
      explanation: "ตำแหน่งหน้านาม 'report' ต้องการคำคุณศัพท์ (Adjective) มาขยาย ในภาษาอังกฤษ คำกริยาที่ลงท้ายด้วย -ed (past participle) สามารถทำหน้าที่เป็น Adjective ได้ แปลว่า 'ที่ถูกทำให้มีรายละเอียด' หรือ 'ที่มีรายละเอียดครบถ้วน' ดังนั้น 'detailed' จึงถูกต้องที่สุด"
    },
    {
      id: "l1_q3",
      question: "She completes her daily tasks _______ and never misses a deadline.",
      options: ["quick", "quickly", "quickness", "quicker"],
      answer: "quickly",
      explanation: "ในประโยคนี้ เราต้องการคำวิเศษณ์ (Adverb) เพื่อขยายกริยา 'completes' (ทำงานเสร็จอย่างรวดเร็ว) คำวิเศษณ์โดยทั่วไปจะลงท้ายด้วย -ly ดังนั้น 'quickly' จึงเป็นคำตอบที่ถูกต้อง ส่วน quick เป็น Adjective, quickness เป็นคำนาม และ quicker เป็นขั้นกว่าของ Adjective"
    },
    {
      id: "l1_q4",
      question: "The _______ of the new company policies will be held in the main conference room.",
      options: ["discuss", "discussion", "discussed", "discussing"],
      answer: "discussion",
      explanation: "ตำแหน่งหลังบทนำหน้านาม 'The' และอยู่หน้า 'of' จะต้องเป็นคำนาม (Noun) เพื่อทำหน้าที่เป็นประธานของประโยค คำนามของกริยา discuss คือ 'discussion' (การอภิปราย/การหารือ) ดังนั้นจึงตอบ discussion"
    },
    {
      id: "l1_q5",
      question: "Mr. Harrison asked _______ to help him with the filing of the client records.",
      options: ["he", "him", "his", "himself"],
      answer: "him",
      explanation: "หลังคำกริยาแสดงอาการ 'asked' เราต้องการคำสรรพนามทำหน้าที่เป็นกรรม (Object Pronoun) ของประโยค ดังนั้น 'him' จึงเป็นคำตอบที่ถูกต้อง ในขณะที่ he เป็นประธาน (Subject), his เป็นสรรพนามแสดงความเป็นเจ้าของ (Possessive) และ himself เป็นสรรพนามสะท้อน (Reflexive)"
    },
    {
      id: "l1_q6",
      question: "The company offers _______ training programs for all new entry-level employees.",
      options: ["free", "freely", "freedom", "freeing"],
      answer: "free",
      explanation: "เราต้องการคำคุณศัพท์ (Adjective) หน้ากลุ่มคำนาม 'training programs' เพื่อบอกลักษณะของโปรแกรมฝึกอบรมว่า 'ฟรี' (ไม่มีค่าใช้จ่าย) ดังนั้น 'free' ซึ่งทำหน้าที่เป็น Adjective จึงถูกต้อง ส่วน freely เป็น Adverb (อย่างเป็นอิสระ), freedom เป็นคำนาม (เสรีภาพ) และ freeing เป็น Verb เติม -ing"
    },
    {
      id: "l1_q7",
      question: "Please review the safety guidelines _______ before operating the machinery.",
      options: ["care", "careful", "carefully", "carefulness"],
      answer: "carefully",
      explanation: "เราต้องการคำวิเศษณ์ (Adverb) ไปขยายกริยา 'review' (ตรวจสอบอย่างระมัดระวัง/อย่างรอบคอบ) คำว่า 'carefully' ลงท้ายด้วย -ly ทำหน้าที่เป็น Adverb ได้ถูกต้องที่สุด ส่วน care เป็นคำนามหรือกริยา, careful เป็น Adjective และ carefulness เป็นคำนาม"
    },
    {
      id: "l1_q8",
      question: "The _______ team will design the layout for the upcoming product catalog.",
      options: ["create", "creative", "creatively", "creation"],
      answer: "creative",
      explanation: "หน้าคำนาม 'team' ต้องการคำคุณศัพท์ (Adjective) เพื่อระบุประเภทของทีมว่าเป็น 'ทีมสร้างสรรค์' คำคุณศัพท์ที่สร้างจากกริยา create คือ 'creative' (ซึ่งมีความคิดสร้างสรรค์) ส่วน creation เป็นคำนาม (การสร้างสรรค์) และ creatively เป็น Adverb"
    },
    {
      id: "l1_q9",
      question: "Our sales figures have increased _______ since we started the online campaign.",
      options: ["significant", "significantly", "significance", "signified"],
      answer: "significantly",
      explanation: "หลังคำกริยาหลัก 'increased' (เพิ่มขึ้น) เราต้องการคำวิเศษณ์ (Adverb) มาขยายเพื่อบอกลักษณะของการเพิ่มขึ้นว่า 'อย่างมีนัยสำคัญ' ดังนั้น 'significantly' จึงถูกต้องที่สุด ส่วน significant เป็น Adjective และ significance เป็นคำนาม"
    },
    {
      id: "l1_q10",
      question: "All employees must wear their _______ badges at all times while in the building.",
      options: ["identify", "identification", "identified", "identifyingly"],
      answer: "identification",
      explanation: "ในที่นี้เราต้องการคำนามมาประสมกับคำนาม badges เกิดเป็นคำนามประสม (Compound Noun) คือ 'identification badges' (บัตรแสดงตัวตน/บัตรพนักงาน) คำว่า identification ทำหน้าที่เป็น Noun Adjunct ได้ถูกต้องที่สุด"
    },
    {
      id: "l1_q11",
      question: "He is recognized as the most _______ engineer in our design department.",
      options: ["experience", "experienced", "experiences", "experiencing"],
      answer: "experienced",
      explanation: "หลังคำว่า 'the most' และอยู่หน้าคำนาม 'engineer' เราต้องการคำคุณศัพท์ (Adjective) ขั้นสูงสุด คำว่า 'experienced' เป็นรูป Adjective ที่แปลว่า 'ที่มีประสบการณ์' ส่วน experience ปกติเป็นนามหรือกริยาช่อง 1"
    },
    {
      id: "l1_q12",
      question: "The board of directors decided to _______ the annual budget meeting until next week.",
      options: ["postpone", "postponement", "postponed", "postponing"],
      answer: "postpone",
      explanation: "หลังโครงสร้าง 'decide to' ต้องใช้กริยาฐาน (V.1 หรือ Infinitive) เสมอ ดังนั้น 'postpone' (เลื่อนเวลา) จึงเป็นคำตอบที่ถูกต้อง ส่วน postponement เป็นคำนามแปลว่าการเลื่อนเวลา"
    },
    {
      id: "l1_q13",
      question: "The customer was very _______ with the prompt service provided by our staff.",
      options: ["satisfy", "satisfied", "satisfying", "satisfaction"],
      answer: "satisfied",
      explanation: "หลังกริยาเชื่อมโยง (Linking Verb) 'was' และตัวขยาย 'very' เราต้องการ Adjective เพื่ออธิบายความรู้สึกของประธานที่เป็นคน (The customer) โครงสร้างความรู้สึกของคนมักจะใช้รูปกริยาช่อง 3 เติม -ed (satisfied = รู้สึกพึงพอใจ) ส่วน satisfying แปลว่าน่าพึงพอใจ (ใช้ขยายสิ่งของ)"
    },
    {
      id: "l1_q14",
      question: "We need to hire a qualified _______ assistant to manage the office schedules.",
      options: ["office", "official", "administrative", "administration"],
      answer: "administrative",
      explanation: "หน้าคำนาม 'assistant' (ผู้ช่วย) ต้องการคำคุณศัพท์ (Adjective) เพื่อบอกประเภทงาน คำคุณศัพท์ที่เหมาะสมคือ 'administrative' (เกี่ยวกับการบริหารงานเอกสารและธุรการ) รวมเป็น administrative assistant (ผู้ช่วยธุรการ)"
    },
    {
      id: "l1_q15",
      question: "The project was completed on schedule thanks to _______ hard work and dedication.",
      options: ["their", "them", "they", "theirs"],
      answer: "their",
      explanation: "หน้าคำนามรวม 'hard work and dedication' ต้องการคำสรรพนามประเภทคุณศัพท์แสดงความเป็นเจ้าของ (Possessive Adjective) เพื่อขยายคำนามว่า 'งานหนักของพวกเขา' ดังนั้น 'their' จึงถูกต้องที่สุด ส่วน them เป็นกรรม, they เป็นประธาน และ theirs เป็นกรรมแสดงความเป็นเจ้าของแบบไม่ต้องมีนามตามหลัง"
    },
    {
      id: "l1_q16",
      question: "Could you please _______ your signature at the bottom of the page?",
      options: ["write", "writer", "writing", "written"],
      answer: "write",
      explanation: "หลังคำช่วยสุภาพ 'Could you please...' ต้องใช้กริยาช่อง 1 ในรูปเดิม (Base Verb) เสมอ ดังนั้นกริยาฐาน 'write' จึงเป็นคำตอบที่ถูกต้อง ส่วน writer เป็นคำนาม (นักเขียน), writing เป็น gerund/V-ing และ written เป็น V.3"
    },
    {
      id: "l1_q17",
      question: "The marketing team created an _______ advertisement for the new smartphone.",
      options: ["attract", "attractive", "attractively", "attraction"],
      answer: "attractive",
      explanation: "หน้าคำนาม 'advertisement' (โฆษณา) ต้องการคำคุณศัพท์ (Adjective) เพื่อขยายความ โครงสร้างคำคุณศัพท์คือ 'attractive' (ที่ดึงดูดใจ/น่าสนใจ) ส่วน attract เป็นกริยา, attractively เป็นวิเศษณ์ และ attraction เป็นคำนามแปลว่าสถานที่ท่องเที่ยวหรือแรงดึงดูด"
    },
    {
      id: "l1_q18",
      question: "Ms. Henderson has worked in the accounting department _______ three years.",
      options: ["since", "for", "during", "while"],
      answer: "for",
      explanation: "คำระบุเวลา 'three years' คือระยะเวลา (duration) ดังนั้นในประโยค Present Perfect Tense เราจึงใช้บุพบท 'for' (เป็นเวลา) ส่วน since ใช้บอกจุดเริ่มต้นของเวลา (เช่น since 2023), during แปลว่าในระหว่าง (ตามด้วยนามทั่วไป) และ while แปลว่าขณะที่ (ตามด้วยประโยค)"
    },
    {
      id: "l1_q19",
      question: "The office will remain _______ during the upcoming Thanksgiving holiday weekend.",
      options: ["close", "closed", "closing", "closure"],
      answer: "closed",
      explanation: "กริยา 'remain' เป็น Linking Verb ซึ่งต้องตามด้วยคำคุณศัพท์ (Adjective) เพื่ออธิบายสภาพของประธาน (The office) คำว่า 'closed' ทำหน้าที่เป็น Adjective บอกสภาพว่า 'อยู่ในสภาพปิดทำการ' จึงเป็นคำตอบที่ถูกต้อง ส่วน closure เป็นคำนามแปลว่าการปิดตัวลง"
    },
    {
      id: "l1_q20",
      question: "You should read the terms and conditions _______ before signing the contract.",
      options: ["thorough", "thoroughly", "thoroughness", "more thorough"],
      answer: "thoroughly",
      explanation: "เราต้องการคำวิเศษณ์ (Adverb) ขยายคำกริยา 'read' (อ่านอย่างถี่ถ้วน/ละเอียด) คำว่า 'thoroughly' (อย่างถี่ถ้วน) ทำหน้าที่เป็น Adverb ขยายกริยาได้ถูกต้องที่สุด ส่วน thorough เป็นเพียง Adjective และ thoroughness เป็นคำนาม"
    }
  ],
  L2: [
    {
      id: "l2_q1",
      question: "The corporate director expressed _______ about the declining sales figures this quarter.",
      options: ["anxious", "anxiously", "anxiety", "anxiousness"],
      answer: "anxiety",
      explanation: "หลังคำกริยาแสดงอาการ 'expressed' (แสดงออก) เราต้องการคำนาม (Noun) มาทำหน้าที่เป็นกรรมตรงของกริยานี้ คำว่า 'anxiety' (ความวิตกกังวล) เป็นคำนามมาตรฐานที่นิยมใช้มากที่สุดในทางธุรกิจ ส่วน anxious เป็น Adjective และ anxiously เป็น Adverb"
    },
    {
      id: "l2_q2",
      question: "We need to evaluate the _______ of the new security system before installing it.",
      options: ["effective", "effectively", "effectiveness", "effected"],
      answer: "effectiveness",
      explanation: "โครงสร้าง 'the + [Noun] + of' กำหนดว่าคำในช่องว่างต้องเป็นคำนาม คำว่า 'effectiveness' (ประสิทธิผล/ประสิทธิภาพ) เป็นคำนามที่ลงท้ายด้วย suffix '-ness' ซึ่งตรงตามความหมายที่ต้องประเมินประสิทธิผลของระบบความปลอดภัย"
    },
    {
      id: "l2_q3",
      question: "The newly hired administrative manager works _______ than his predecessor.",
      options: ["hard", "harder", "hardest", "hardly"],
      answer: "harder",
      explanation: "ในประโยคมีคำว่า 'than' แสดงถึงการเปรียบเทียบขั้นกว่า (Comparative) คำกริยาวิเศษณ์ขยาย 'works' ในรูปขั้นกว่าคือ 'harder' (ขยันกว่า/ทำงานหนักกว่า) ส่วนคำว่า 'hardly' แปลว่า แทบจะไม่ ซึ่งขัดกับความหมายเชิงบวกในบริบททำงาน"
    },
    {
      id: "l2_q4",
      question: "The IT technician checked the server logs _______ to ensure database security.",
      options: ["periodic", "periodically", "period", "periodicity"],
      answer: "periodically",
      explanation: "ช่องว่างอยู่หลังกรรมตรง 'server logs' และทำหน้าที่ขยายกริยาหลัก 'checked' (ตรวจสอบอย่างเป็นระยะ) จึงต้องใช้คำวิเศษณ์ (Adverb) คือ 'periodically' ส่วน periodic เป็นเพียง Adjective และ period เป็นคำนาม"
    },
    {
      id: "l2_q5",
      question: "The company's new minimalist logo is _______ recognizable worldwide.",
      options: ["instant", "instantly", "instance", "instantaneous"],
      answer: "instantly",
      explanation: "ช่องว่างอยู่หน้าคำคุณศัพท์ 'recognizable' (ซึ่งเป็นที่จดจำได้) คำที่สามารถขยายคำคุณศัพท์ได้คือคำวิเศษณ์ (Adverb) ดังนั้น 'instantly' (อย่างทันทีทันใด) จึงเป็นคำตอบที่ถูกต้องที่สุด"
    },
    {
      id: "l2_q6",
      question: "The project planning committee will make a final _______ by tomorrow afternoon.",
      options: ["decide", "decisive", "decision", "decisively"],
      answer: "decision",
      explanation: "หลังกลุ่มคำขยาย 'make a final' เราต้องการคำนาม (Noun) มาทำหน้าที่เป็นกรรมของกริยา make (make a decision = ตัดสินใจ) คำนามของกริยา decide คือ 'decision' จึงเป็นคำตอบที่ถูกต้อง"
    },
    {
      id: "l2_q7",
      question: "Employees are encouraged to solve minor technical conflicts _______ before reporting to supervisors.",
      options: ["them", "their", "themselves", "theirs"],
      answer: "themselves",
      explanation: "เราต้องการเน้นย้ำว่าประธาน (Employees) ทำกิจกรรมนั้นด้วยตนเองโดยไม่มีผู้อื่นช่วยเหลือ โครงสร้างนี้เรียกว่าสรรพนามสะท้อน (Reflexive Pronoun) ซึ่งรูปที่สอดคล้องกับพหูพจน์ Employees คือ 'themselves' (ด้วยตัวพวกเขาเอง)"
    },
    {
      id: "l2_q8",
      question: "The upcoming software update will _______ enhance our data encryption system.",
      options: ["great", "greatly", "greatness", "greater"],
      answer: "greatly",
      explanation: "ช่องว่างอยู่ระหว่างคำช่วยกริยา 'will' และคำกริยาหลัก 'enhance' (ปรับปรุง/เสริมสร้าง) ตำแหน่งนี้ต้องการคำวิเศษณ์ (Adverb) เพื่อเพิ่มน้ำหนักให้กริยาหลักว่าปรับปรุงขึ้นอย่างมาก ดังนั้น 'greatly' จึงเป็นคำตอบที่ถูกต้อง"
    },
    {
      id: "l2_q9",
      question: "She was promoted because of her _______ performance in the international sales division.",
      options: ["excel", "excellent", "excellently", "excellence"],
      answer: "excellent",
      explanation: "หน้าคำนาม 'performance' (ผลงาน) ต้องการคำคุณศัพท์ (Adjective) มาขยายว่าผลงานดีเลิศ คำคุณศัพท์คือ 'excellent' ส่วน excellence เป็นคำนาม (ความดีเลิศ) และ excellently เป็น Adverb"
    },
    {
      id: "l2_q10",
      question: "Ms. Davis is primary responsible for _______ the monthly financial summary statements.",
      options: ["prepare", "prepared", "preparing", "preparation"],
      answer: "preparing",
      explanation: "หลังคำบุพบท 'for' คำกริยาที่ตามหลังจะต้องอยู่ในรูป Gerund (V-ing) ทำหน้าที่เสมือนคำนามเมื่อมีกรรมตรงตามหลัง (the monthly financial summary statements) ดังนั้น 'preparing' จึงถูกต้องตามหลักไวยากรณ์"
    },
    {
      id: "l2_q11",
      question: "The sales representatives were _______ disappointed by the low customer turnout at the expo.",
      options: ["deep", "deeply", "depth", "deepened"],
      answer: "deeply",
      explanation: "ช่องว่างอยู่หน้า Adjective 'disappointed' (รู้สึกผิดหวัง) ตำแหน่งนี้ต้องการ Adverb เพื่อขยายระดับความรู้สึกผิดหวังว่าอย่างลึกซึ้ง/อย่างมาก ดังนั้น 'deeply' จึงถูกต้องที่สุด ส่วน depth เป็นคำนามแปลว่าความลึก"
    },
    {
      id: "l2_q12",
      question: "A _______ version of the budget will be presented at the board meeting next week.",
      options: ["revise", "revision", "revised", "revising"],
      answer: "revised",
      explanation: "หน้าคำนาม 'version' ต้องการคำคุณศัพท์มาขยาย ในกรณีนี้คือกริยารูปเติม -ed (revised) ทำหน้าที่เป็น Past Participle Adjective เพื่อบอกความหมายว่ารุ่นนี้ 'ได้รับการปรับปรุงแก้ไขแล้ว' (ถูกกระทำ) จึงเป็นคำตอบที่สมเหตุสมผลที่สุด"
    },
    {
      id: "l2_q13",
      question: "The client requested a _______ explanation regarding the unexpected billing discrepancy.",
      options: ["detail", "detailed", "details", "detailing"],
      answer: "detailed",
      explanation: "หน้าคำนาม 'explanation' (คำอธิบาย) ต้องการคำคุณศัพท์เพื่อบอกลักษณะคำอธิบายว่ามีรายละเอียด คำกริยา detail เมื่อแปลงเป็น Adjective คือ 'detailed' (ซึ่งมีรายละเอียดมาก) ส่วน details เป็นนามพหูพจน์"
    },
    {
      id: "l2_q14",
      question: "Despite the tight schedule, the team completed the software migration _______.",
      options: ["successful", "successfully", "success", "succeed"],
      answer: "successfully",
      explanation: "ช่องว่างทำหน้าที่ขยายกริยาหลัก 'completed' (ดำเนินงานเสร็จสิ้นอย่างประสบความสำเร็จ) ซึ่งตั้งอยู่หลังกรรมตรง 'software migration' โครงสร้างนี้ต้องการ Adverb ดังนั้น 'successfully' จึงเป็นคำตอบที่ถูกต้อง"
    },
    {
      id: "l2_q15",
      question: "The new relocation policy applies to all _______ staff members in the firm.",
      options: ["permanently", "permanent", "permanence", "permanency"],
      answer: "permanent",
      explanation: "หน้ากลุ่มคำนาม 'staff members' ต้องการคำคุณศัพท์ (Adjective) มาขยายเพื่อบอกประเภทของพนักงานว่าเป็นพนักงานประจำ (permanent staff members) ดังนั้น 'permanent' จึงเป็นรูปคำที่ถูกต้อง ส่วน permanence เป็นคำนาม แปลว่าความคงทนถาวร"
    },
    {
      id: "l2_q16",
      question: "We are actively looking for a candidate with _______ experience in project management.",
      options: ["demonstrate", "demonstrated", "demonstrating", "demonstration"],
      answer: "demonstrated",
      explanation: "หน้าคำนาม 'experience' ต้องการ Adjective มาขยายเพื่อระบุว่าประสบการณ์นั้นต้องผ่านการพิสูจน์หรือแสดงให้เห็นจริงแล้ว คำว่า 'demonstrated' อยู่ในรูป Past Participle ทำหน้าที่ขยายคำนามว่า 'ที่ได้รับการพิสูจน์แล้ว' ได้อย่างถูกต้องที่สุด"
    },
    {
      id: "l2_q17",
      question: "The CEO praised the staff for their _______ dedication to the company recovery project.",
      options: ["tire", "tireless", "tirelessly", "tiredness"],
      answer: "tireless",
      explanation: "หน้าคำนาม 'dedication' (ความทุ่มเท) ต้องการ Adjective มาขยาย คำว่า 'tireless' (ซึ่งเหน็ดเหนื่อยไม่เป็น/ไม่รู้จักเหน็ดเหนื่อย) เป็น Adjective ที่เหมาะสมที่สุด ส่วน tirelessly เป็น Adverb และ tiredness เป็นคำนาม (ความเหนื่อยล้า)"
    },
    {
      id: "l2_q18",
      question: "Please handle the delicate prototype equipment _______ to prevent damage.",
      options: ["caution", "cautious", "cautiously", "cautiousness"],
      answer: "cautiously",
      explanation: "ช่องว่างอยู่หลังกรรมตรงของประโยคเพื่ออธิบายลักษณะการกระทำต่อคำกริยา 'handle' (จัดการ/เคลื่อนย้ายอย่างระมัดระวัง) จึงต้องใช้ Adverb คือ 'cautiously' ส่วน cautious เป็น Adjective และ caution เป็นคำนามแปลว่าความระมัดระวัง"
    },
    {
      id: "l2_q19",
      question: "The new advertising campaign was designed to reach _______ customers.",
      options: ["potential", "potentially", "potentiality", "potent"],
      answer: "potential",
      explanation: "หน้าคำนาม 'customers' (ลูกค้า) ต้องการ Adjective มาขยายในความหมายว่า 'ลูกค้าที่มีศักยภาพหรือลูกค้าในอนาคต' คำว่า 'potential' สามารถทำหน้าที่เป็นคำคุณศัพท์ได้ในรูปนี้ ส่วน potentially เป็น Adverb และ potentiality เป็นคำนาม"
    },
    {
      id: "l2_q20",
      question: "He submitted his formal resignation letter _______ after securing a new position.",
      options: ["short", "shortly", "shorten", "shortness"],
      answer: "shortly",
      explanation: "ในที่นี้เราต้องการคำวิเศษณ์แสดงเวลา (Adverb of time) มาประกอบคู่กับบุพบท 'after' เพื่อสื่อความหมายว่า 'ในเวลาไม่นานหลังจาก...' คำว่า 'shortly' ทำหน้าที่เป็น Adverb แปลว่า เร็วๆ นี้ หรือ ในเวลาอันสั้น จึงเป็นคำตอบที่ถูกต้องที่สุด"
    }
  ],
  L3: [
    {
      id: "l3_q1",
      question: "The job candidate’s resume was _______ impressive, highlighting over ten years of leadership.",
      options: ["exceptions", "exceptional", "exceptionally", "except"],
      answer: "exceptionally",
      explanation: "หน้าคำคุณศัพท์ 'impressive' ต้องการ Adverb มาขยายดีกรี (ความยากง่าย/ระดับความน่าทึ่ง) ว่า 'น่าทึ่งอย่างยิ่ง/เป็นพิเศษ' ดังนั้น 'exceptionally' จึงเป็นคำตอบที่ถูกต้อง ส่วน exceptional เป็นเพียง Adjective"
    },
    {
      id: "l3_q2",
      question: "Under the new management group, the manufacturing division has become much more _______.",
      options: ["produce", "productive", "productively", "productivity"],
      answer: "productive",
      explanation: "หลัง Linking Verb 'become' (กลายเป็น) และคำขยายระดับ 'much more' เราต้องการคำคุณศัพท์ (Adjective) เพื่อแสดงสถานะของประธาน (the division) คำคุณศัพท์ที่ถูกต้องคือ 'productive' (ซึ่งให้ผลผลิตสูง) ส่วน productivity เป็นคำนาม"
    },
    {
      id: "l3_q3",
      question: "The logistics company will not be held liable for any _______ caused by the natural disaster.",
      options: ["lose", "lost", "loss", "losing"],
      answer: "loss",
      explanation: "หลังคำบอกปริมาณ 'any' เราต้องการคำนาม (Noun) เพื่อทำหน้าที่เป็นกรรมของประโยค คำนามทั่วไปของคำกริยา lose คือ 'loss' (ความสูญเสีย/ความเสียหาย) ส่วน lost เป็น Verb ช่อง 2/3 หรือคำคุณศัพท์ และ losing เป็นกริยาเติม -ing"
    },
    {
      id: "l3_q4",
      question: "The board of directors approved the merger _______ after reviewing the audit reports.",
      options: ["unanimous", "unanimously", "unanimity", "animus"],
      answer: "unanimously",
      explanation: "ช่องว่างอยู่หลังกรรมตรง 'the merger' เพื่อทำหน้าที่ขยายกริยาหลัก 'approved' (อนุมัติอย่างเป็นเอกฉันท์) โครงสร้างนี้ต้องการ Adverb ดังนั้นจึงตอบ 'unanimously' ส่วน unanimous เป็น Adjective และ unanimity เป็นนามแปลว่าความเป็นเอกฉันท์"
    },
    {
      id: "l3_q5",
      question: "The research team needs to find a _______ solution to the plastic waste management problem.",
      options: ["sustain", "sustainable", "sustainably", "sustainability"],
      answer: "sustainable",
      explanation: "หน้าคำนาม 'solution' (ทางออก/วิธีแก้ปัญหา) ต้องการคำคุณศัพท์ (Adjective) เพื่อขยายคุณลักษณะของวิธีแก้ปัญหาว่า 'ยั่งยืน' คำคุณศัพท์ที่ถูกต้องคือ 'sustainable' ส่วน sustainability เป็นคำนาม (ความยั่งยืน)"
    },
    {
      id: "l3_q6",
      question: "The senior project manager remains _______ that the client will accept the final proposal.",
      options: ["optimist", "optimistic", "optimistically", "optimism"],
      answer: "optimistic",
      explanation: "กริยา 'remains' ทำหน้าที่เป็น Linking Verb อธิบายสภาวะทางจิตใจของประธาน (The senior project manager) ดังนั้นตำแหน่งนี้ต้องการ Adjective คือ 'optimistic' (ซึ่งมองโลกในแง่ดี) ส่วน optimist คือบุคคลที่มองโลกในแง่ดี (นามคน) และ optimism คือลัทธิมองโลกในแง่ดี (นามสิ่งของ)"
    },
    {
      id: "l3_q7",
      question: "She works _______ with the legal department to ensure compliance with local trade regulations.",
      options: ["close", "closely", "closeness", "closer"],
      answer: "closely",
      explanation: "ช่องว่างใช้ขยายกริยา 'works' ในประโยคความหมายว่า 'ทำงานร่วมกันอย่างใกล้ชิด' เราจึงต้องการคำวิเศษณ์ (Adverb) คือ 'closely' ส่วน close แม้จะเป็น Adverb ได้แต่แปลว่าใกล้ชิดในเชิงพื้นที่ทางกายภาพ ในเชิงความร่วมมือทำงานนิยมใช้ closely"
    },
    {
      id: "l3_q8",
      question: "The new employee showed great _______ by organizing the chaotic database without being asked.",
      options: ["initiate", "initiative", "initially", "initiation"],
      answer: "initiative",
      explanation: "หลังคำคุณศัพท์ 'great' ต้องการคำนามทำหน้าที่เป็นกรรมตรงของกริยา 'showed' คำว่า 'initiative' (ความคิดริเริ่มสร้างสรรค์/ความกระตือรือร้นด้วยตนเอง) เป็นคำนามที่เหมาะสมที่สุดในบริบทนี้ ส่วน initiate เป็นกริยา และ initially เป็น Adverb"
    },
    {
      id: "l3_q9",
      question: "The sudden product recall had a _______ negative impact on our quarterly revenue projections.",
      options: ["severe", "severely", "severity", "severing"],
      answer: "severely",
      explanation: "ช่องว่างตั้งอยู่หน้านามวลี 'negative impact' โดยอยู่ชิด Adjective 'negative' หน้าที่นี้ต้องเป็น Adverb ไปขยายคำคุณศัพท์ติดกันว่า 'ส่งผลกระทบเชิงลบอย่างรุนแรง' จึงตอบ 'severely' ส่วน severe เป็นเพียง Adjective"
    },
    {
      id: "l3_q10",
      question: "The office renovation project was delayed _______ severe budget constraints.",
      options: ["because", "because of", "although", "despite"],
      answer: "because of",
      explanation: "ด้านหลังช่องว่างคือ 'severe budget constraints' ซึ่งเป็นคำนามวลี (Noun Phrase) ไม่ใช่ประโยคเต็มที่มีกริยาแท้ ดังนั้นจึงต้องเชื่อมด้วยคำบุพบทบอกเหตุผลคือ 'because of' (เนื่องจาก) ส่วน because ต้องตามด้วยประโยค (Clause) และ despite แปลว่า ทั้งๆ ที่ ซึ่งมีความขัดแย้งไม่ตรงบริบท"
    },
    {
      id: "l3_q11",
      question: "Mr. Peterson is highly respected for his _______ attitude toward customer service resolutions.",
      options: ["professional", "professionally", "professionalism", "profess"],
      answer: "professional",
      explanation: "หน้าคำนาม 'attitude' (ทัศนคติ) ต้องการคำคุณศัพท์ (Adjective) มาขยายเพื่อบอกลักษณะทัศนคติว่ามีความเป็นมืออาชีพ คำว่า 'professional' ทำหน้าที่เป็น Adjective ได้ถูกต้องที่สุด ส่วน professionalism เป็นนามแปลว่าความเป็นมืออาชีพ"
    },
    {
      id: "l3_q12",
      question: "The cloud database software is _______ easy to install, taking less than five minutes total.",
      options: ["remark", "remarkable", "remarkably", "remarked"],
      answer: "remarkably",
      explanation: "ช่องว่างอยู่หน้า Adjective 'easy' ดังนั้นตำแหน่งนี้จึงต้องการ Adverb มาช่วยขยายระดับความง่ายว่า 'ง่ายอย่างน่าทึ่ง/เหลือเชื่อ' คำตอบที่ถูกต้องจึงเป็น 'remarkably' ซึ่งเป็นรูป Adverb"
    },
    {
      id: "l3_q13",
      question: "All project proposals must be submitted _______ the deadline if you want them to be evaluated.",
      options: ["before", "during", "since", "until"],
      answer: "before",
      explanation: "ในประโยคธุรกิจนี้ต้องการสื่อว่าให้ส่ง 'ก่อนกำหนดเวลาส่ง' (deadline) ดังนั้นบุพบทที่ระบุความหมายนี้ได้ถูกต้องคือ 'before' ส่วน during (ระหว่าง), since (ตั้งแต่) และ until (จนกระทั่ง) ไม่เหมาะสมกับคำว่า deadline ที่เป็นเส้นตายจำกัดการกระทำ"
    },
    {
      id: "l3_q14",
      question: "We must obtain written _______ from the commercial landlord before subletting the office space.",
      options: ["permit", "permission", "permissive", "permissibly"],
      answer: "permission",
      explanation: "หลังคำคุณศัพท์ 'written' เราต้องการคำนาม (Noun) ทำหน้าที่เป็นกรรมของกริยา obtain คำว่า 'permission' (การอนุญาต) เป็นคำนามนับไม่ได้ที่ต้องการสื่อความหมายนี้ ส่วน permit ถ้าเป็นคำนามแปลว่าใบอนุญาตที่เป็นแผ่นเอกสารทางการ ซึ่งตามหลักแล้วการอนุญาตทั่วไปจะใช้ permission"
    },
    {
      id: "l3_q15",
      question: "The hotel offers _______ decorated guest rooms with panoramic views of the city center.",
      options: ["taste", "tasteful", "tastefully", "tastiness"],
      answer: "tastefully",
      explanation: "หน้ากริยารูปเติม -ed 'decorated' (ซึ่งถูกตกแต่ง) ซึ่งทำหน้าที่เป็น Adjective ขยาย guest rooms เราต้องการ Adverb เพื่อขยายกริยาคุณศัพท์นี้ว่าตกแต่ง 'อย่างมีรสนิยม' ดังนั้นคำตอบคือ 'tastefully'"
    },
    {
      id: "l3_q16",
      question: "The CEO announced that the company is _______ seeking new investment opportunities in Europe.",
      options: ["active", "actively", "activity", "activism"],
      answer: "actively",
      explanation: "ช่องว่างตั้งอยู่หน้า Present Participle 'seeking' (ในโครงสร้าง progressive is... seeking) ตำแหน่งนี้ต้องการ Adverb เพื่อขยายกริยาการค้นหาว่าหา 'อย่างจริงจัง/ขยันขันแข็ง' ดังนั้น 'actively' จึงถูกต้อง"
    },
    {
      id: "l3_q17",
      question: "The shift supervisor gave us some _______ feedback on our presentation slides.",
      options: ["construct", "constructive", "constructively", "construction"],
      answer: "constructive",
      explanation: "หน้าคำนาม 'feedback' ต้องการ Adjective มาขยายเพื่อชี้คุณสมบัติของข้อเสนอแนะว่า 'สร้างสรรค์' หรือ 'มีประโยชน์' คำว่า 'constructive' ทำหน้าที่เป็น Adjective ได้ถูกต้อง ส่วน construction เป็นคำนามแปลว่าการก่อสร้าง"
    },
    {
      id: "l3_q18",
      question: "The developers decided to purchase the commercial building _______ its high maintenance costs.",
      options: ["although", "despite", "in spite", "even though"],
      answer: "despite",
      explanation: "คำว่า 'its high maintenance costs' ด้านหลังช่องว่างเป็นคำนามวลี (Noun Phrase) ดังนั้นจึงต้องใช้คำบุพบทเชื่อมความขัดแย้งคือ 'despite' (ทั้งๆ ที่/แม้ว่า) ส่วน although และ even though ต้องใช้ตามด้วยประโยค (Clause) และ in spite ต้องมี of เสมอ (in spite of)"
    },
    {
      id: "l3_q19",
      question: "The target marketing campaign has been _______ successful, exceeding expectations by 50%.",
      options: ["surprise", "surprised", "surprisingly", "surprising"],
      answer: "surprisingly",
      explanation: "อยู่หน้าคำคุณศัพท์ 'successful' เพื่อขยายระดับความสำเร็จว่า 'ประสบความสำเร็จอย่างน่าประหลาดใจ' โครงสร้างนี้ต้องใช้ Adverb ดังนั้น 'surprisingly' จึงถูกต้องที่สุด"
    },
    {
      id: "l3_q20",
      question: "The employment contract requires all disputes to be settled through binding _______.",
      options: ["arbitrate", "arbitrator", "arbitration", "arbitrary"],
      answer: "arbitration",
      explanation: "หลังคำคุณศัพท์ 'binding' (ที่มีผลผูกพันตามกฎหมาย) และอยู่หลังบุพบท 'through' เราต้องการคำนาม (Noun) เพื่ออธิบายกระบวนการระงับข้อพิพาท คำว่า 'arbitration' (การอนุญาโตตุลาการ) เป็นชื่อกระบวนการทางกฎหมาย จึงถูกต้อง ส่วน arbitrator คือตัวผู้ตัดสินหรืออนุญาโตตุลาการที่เป็นคน"
    }
  ],
  L4: [
    {
      id: "l4_q1",
      question: "The company's new strict overtime policy was met with strong _______ from the sales force.",
      options: ["resist", "resistant", "resistance", "resistantly"],
      answer: "resistance",
      explanation: "หลังคำคุณศัพท์ 'strong' และหลังบุพบท 'with' เราต้องการคำนามเพื่อรองรับโครงสร้างประโยค (was met with strong resistance = ได้รับการต่อต้านอย่างรุนแรง) คำนามของกริยา resist คือ 'resistance' (การต่อต้าน)"
    },
    {
      id: "l4_q2",
      question: "The new product was launched in domestic markets after months of _______ research.",
      options: ["exhaust", "exhaustive", "exhaustively", "exhaustion"],
      answer: "exhaustive",
      explanation: "หน้าคำนาม 'research' ต้องการ Adjective มาขยาย ในบริบทการวิจัย ความหมายที่ต้องการสื่อคือ 'การวิจัยอย่างละเอียดถี่ถ้วน/ครอบคลุมทุกด้าน' ตรงกับคำคุณศัพท์ 'exhaustive' ส่วน exhaust เป็นกริยาแปลว่าทำให้เหนื่อยล้า และ exhaustion แปลว่าความเหนื่อยล้าจนหมดแรง"
    },
    {
      id: "l4_q3",
      question: "The legal department is reviewing the deal to ensure there are no _______ clauses in it.",
      options: ["contradict", "contradiction", "contradictory", "contradictorily"],
      answer: "contradictory",
      explanation: "หน้าคำนาม 'clauses' (ข้อกำหนด/มาตราในสัญญา) ต้องการคำคุณศัพท์ (Adjective) เพื่อระบุลักษณะข้อกำหนดที่เป็นปัญหา คือ 'ขัดแย้งกันเอง' คำคุณศัพท์ที่ถูกต้องคือ 'contradictory' ส่วน contradiction เป็นคำนามแปลว่าความขัดแย้ง"
    },
    {
      id: "l4_q4",
      question: "The plant supervisor commended the assembly team for working so _______ during the emergency.",
      options: ["collaborate", "collaborative", "collaboratively", "collaboration"],
      answer: "collaboratively",
      explanation: "ต้องการคำวิเศษณ์ (Adverb) เพื่อไปขยายกริยาการทำงาน 'working' ว่าทำงานประสานร่วมมือกันเป็นทีมอย่างดี คำวิเศษณ์คือ 'collaboratively' ส่วน collaborative เป็น Adjective และ collaboration เป็นคำนาม"
    },
    {
      id: "l4_q5",
      question: "The company will provide a generous _______ package to employees affected by structural restructuring.",
      options: ["sever", "severance", "severed", "severing"],
      answer: "severance",
      explanation: "ในที่นี้เราต้องการคำนามมาประสมกับคำว่า package เพื่อเกิดเป็นคำนามประสม (Compound Noun) ทางกฎหมายและทรัพยากรบุคคล คือ 'severance package' (ค่าชดเชยการเลิกจ้าง) คำว่า severance ทำหน้าที่เป็น Noun Adjunct ได้ถูกต้องที่สุด"
    },
    {
      id: "l4_q6",
      question: "The auditing firm noted a _______ discrepancy in the financial ledger statements.",
      options: ["material", "materially", "materiality", "materialize"],
      answer: "material",
      explanation: "หน้าคำนาม 'discrepancy' (ความคลาดเคลื่อน) ต้องการ Adjective มาขยายในบริบทการบัญชี คำว่า 'material' เมื่อทำหน้าที่เป็น Adjective ในบริบททางการเงินจะมีความหมายว่า 'สำคัญ/มีนัยสำคัญ' (material discrepancy = ข้อคลาดเคลื่อนที่มีนัยสำคัญต่อบัญชี) ส่วน materially เป็น Adverb"
    },
    {
      id: "l4_q7",
      question: "The senior diplomat handled the delicate contract negotiations with great _______.",
      options: ["tact", "tactful", "tactfully", "tactfulness"],
      answer: "tact",
      explanation: "หลังคำคุณศัพท์ 'great' และตามหลังบุพบท 'with' เราต้องการคำนาม (Noun) มารับความหมาย คำว่า 'tact' เป็นคำนามที่แปลว่า 'ความมีไหวพริบ/การรู้จักผ่อนปรนเพื่อประนีประนอม' ซึ่งนิยมใช้ในแวดวงเจรจาธุรกิจและทูตมากกว่าความหมายเชิงอ้อมค้อมของ tactfulness"
    },
    {
      id: "l4_q8",
      question: "The new CEO plans to _______ restructure the company’s administrative departments.",
      options: ["system", "systematic", "systematically", "systematize"],
      answer: "systematically",
      explanation: "ช่องว่างอยู่หน้ากริยาหลัก 'restructure' และอยู่หลัง infinitive marker 'to' ตำแหน่งนี้ต้องการ Adverb เพื่ออธิบายกระบวนการปรับโครงสร้างว่า 'กระทำอย่างเป็นระบบระเบียบ' ดังนั้น 'systematically' จึงถูกต้องที่สุด"
    },
    {
      id: "l4_q9",
      question: "The board of executives needs to verify the _______ of the figures before issuing the annual report.",
      options: ["accurate", "accurately", "accuracy", "accurateness"],
      answer: "accuracy",
      explanation: "โครงสร้าง 'the + [Noun] + of' กำหนดว่าต้องการคำนามในช่องว่าง คำนามมาตรฐานที่แปลว่าความแม่นยำหรือความถูกต้องในภาษาอังกฤษคือ 'accuracy' ส่วน accurateness เป็นรูปคำที่พบได้ยากมากและไม่ใช่อภิธานศัพท์ทางการ"
    },
    {
      id: "l4_q10",
      question: "The merger contract was signed _______ the objection of several minority board members.",
      options: ["notwithstanding", "although", "unless", "whereas"],
      answer: "notwithstanding",
      explanation: "ด้านหลังช่องว่างตามด้วยนามวลี 'the objection of...' คำที่สามารถทำหน้าที่เป็นบุพบท (Preposition) เชื่อมประโยคโดยให้ความหมายว่า 'ทั้งๆ ที่/แม้ว่าจะมี...' คือคำว่า 'notwithstanding' ส่วนคำเชื่อมอื่น เช่น although และ whereas ต้องเชื่อมประโยคสมบูรณ์ (Clause) และ unless แปลว่า ถ้าหากไม่"
    },
    {
      id: "l4_q11",
      question: "The company’s growth in export markets has been seriously _______ by the lack of raw materials.",
      options: ["hinder", "hindered", "hindrance", "hindering"],
      answer: "hindered",
      explanation: "ประโยคนี้ใช้โครงสร้าง Passive Voice (has been + V.3) ร่วมกับ Adverb 'seriously' เพื่ออธิบายว่าการเติบโต 'ถูกขัดขวาง/ถูกชะลอ' ดังนั้นจึงต้องตอบกริยาช่อง 3 คือ 'hindered' ส่วน hindrance เป็นคำนามแปลว่าอุปสรรค"
    },
    {
      id: "l4_q12",
      question: "The marketing department is _______ seeking new partnership opportunities in South America.",
      options: ["aggressive", "aggressively", "aggressiveness", "aggression"],
      answer: "aggressively",
      explanation: "ช่องว่างขยายกริยาหลัก 'seeking' (กำลังเสาะแสวงหา) ในบริบทธุรกิจต้องการสื่อว่าแสวงหา 'อย่างจริงจัง/เชิงรุก/อย่างมุ่งมั่น' จึงใช้ Adverb 'aggressively' ขยายกริยาหลักได้ตรงประเด็นที่สุด"
    },
    {
      id: "l4_q13",
      question: "The corporate consultant was hired to help _______ the logistics operations.",
      options: ["stream", "streamline", "streamlined", "streamlining"],
      answer: "streamline",
      explanation: "หลังโครงสร้างกริยา 'help' สามารถตามด้วยกริยาฐาน (Bare Infinitive) ได้โดยตรงโดยไม่ต้องมี to ในความหมายว่าช่วยขัดเกลา/ปรับปรุงกระบวนการให้มีประสิทธิภาพยิ่งขึ้น คำกริยาในบริบทนี้คือ 'streamline' (ปรับปรุงกระบวนการให้รวดเร็วขึ้น) จึงถูกต้องที่สุด"
    },
    {
      id: "l4_q14",
      question: "The new zoning regulations are expected to have a _______ effect on local retail shops.",
      options: ["detriment", "detrimental", "detrimentally", "detrimented"],
      answer: "detrimental",
      explanation: "หน้าคำนาม 'effect' (ผลกระทบ) เราต้องการคำคุณศัพท์ (Adjective) มาขยายว่าผลกระทบนั้นเป็นเชิงลบหรืออันตราย คำคุณศัพท์คือ 'detrimental' (ที่เป็นอันตราย/ที่สร้างความเสียหาย) ส่วน detriment เป็นคำนาม"
    },
    {
      id: "l4_q15",
      question: "The intern’s exceptional performance exceeded all expectations, _______ him a permanent position.",
      options: ["earn", "earned", "earning", "earnings"],
      answer: "earning",
      explanation: "ประโยคหลักมีความสมบูรณ์ในตัวเองแล้ว และมีเครื่องหมายจุลภาค (comma) คั่นตามด้วยผลลัพธ์ที่ตามมา โครงสร้างนี้เรียกว่า Participle Clause ใช้ Present Participle (V-ing) บอกว่าส่งผลให้เกิดการกระทำถัดไป 'ส่งผลให้เขาได้รับ...' ดังนั้น 'earning' จึงถูกต้องที่สุด"
    },
    {
      id: "l4_q16",
      question: "The pharmaceutical firm has established an _______ reputation for strict quality control measures.",
      options: ["envy", "enviable", "enviably", "envious"],
      answer: "enviable",
      explanation: "หน้าคำนาม 'reputation' (ชื่อเสียง) ต้องการ Adjective มาขยายเพื่อสื่อว่ามีชื่อเสียงที่ดีเลิศจนน่าอิจฉา คำคุณศัพท์ที่ถูกต้องคือ 'enviable' ส่วน envious เป็นคุณศัพท์เหมือนกันแต่แปลว่า 'รู้สึกอิจฉา' (ใช้ขยายความรู้สึกของคน ไม่ใช่ขยายสิ่งของหรือชื่อเสียง)"
    },
    {
      id: "l4_q17",
      question: "The CEO’s keynote address was _______ received by both workers and executive directors.",
      options: ["warm", "warmly", "warmth", "warmer"],
      answer: "warmly",
      explanation: "ช่องว่างอยู่ระหว่างกริยาช่วย 'was' และกริยาช่อง 3 'received' (โครงสร้าง Passive Voice) ตำแหน่งนี้ต้องการ Adverb เพื่อขยายกริยารับฟังว่าได้รับการตอบรับ 'อย่างอบอุ่น/อย่างดียิ่ง' ดังนั้น 'warmly' จึงเป็นคำตอบที่ถูกต้อง"
    },
    {
      id: "l4_q18",
      question: "She was chosen for the executive role due to her _______ knowledge of international trade laws.",
      options: ["comprehend", "comprehensively", "comprehensive", "comprehension"],
      answer: "comprehensive",
      explanation: "หน้าคำนาม 'knowledge' (ความรู้) ต้องการ Adjective มาขยายเพื่ออธิบายว่ามีความรู้ที่กว้างขวางและครอบคลุมทุกด้าน คำว่า 'comprehensive' เป็นคำคุณศัพท์แปลว่าครอบคลุม/รอบด้าน ส่วน comprehensively เป็น Adverb และ comprehension เป็นคำนามแปลว่าความเข้าใจ"
    },
    {
      id: "l4_q19",
      question: "The HR guidelines state that we will not tolerate any _______ behavior in our office space.",
      options: ["disrupt", "disruptive", "disruptively", "disruption"],
      answer: "disruptive",
      explanation: "หน้าคำนาม 'behavior' (พฤติกรรม) ต้องการ Adjective มาขยายเพื่อระบุประเภทพฤติกรรมที่เป็นภัยหรือก่อความไม่สงบ คำว่า 'disruptive' เป็นคำคุณศัพท์ที่แปลว่าก่อกวน/ที่สร้างความวุ่นวาย ส่วน disruption เป็นคำนาม"
    },
    {
      id: "l4_q20",
      question: "The company's future projections are _______ on the assumption that global supply chains will stabilize.",
      options: ["base", "based", "basis", "basically"],
      answer: "based",
      explanation: "ในโครงสร้างประโยคนี้ใช้กริยาเฉื่อย (Passive form) 'are based on' (อิงตาม/ขึ้นอยู่กับ) ดังนั้นคำกริยาที่ประกอบคู่กับ are และ preposition 'on' ได้สมบูรณ์ที่สุดคือ 'based' ในฐานะคำกริยาช่อง 3"
    }
  ],
  L5: [
    {
      id: "l5_q1",
      question: "The sudden _______ of the multimillion-dollar plant shocked the entire construction consortium.",
      options: ["abandon", "abandonment", "abandoned", "abandoning"],
      answer: "abandonment",
      explanation: "ตำแหน่งประธานในโครงสร้าง 'The + [Noun] + of' ต้องการคำนามแท้ไม่ใช่กริยา คำว่า 'abandonment' (การทอดทิ้ง/การละทิ้ง) ทำหน้าที่เป็นคำนามหลักได้ดีที่สุด แม้ว่า abandoning จะเป็น gerund แต่เมื่อตามด้วยบุพบท 'of' ไวยากรณ์ภาษาอังกฤษอย่างเป็นทางการจะนิยมใช้คำนามเฉพาะ (noun derivation) มากกว่าคำกริยาเติม -ing"
    },
    {
      id: "l5_q2",
      question: "The external auditor requested an _______ breakdown of all employee travel expenses.",
      options: ["item", "itemized", "itemise", "itemizing"],
      answer: "itemized",
      explanation: "หน้าคำนาม 'breakdown' (รายการแจกแจงรายละเอียด) ต้องการคุณศัพท์ขยาย คำว่า 'itemized' เป็น Past Participle Adjective แปลว่า 'ซึ่งถูกแจกแจงเป็นรายการย่อยๆ' ซึ่งตรงกับเอกสารบัญชีทางการเงินมากกว่ารูปเติม -ing (itemizing)"
    },
    {
      id: "l5_q3",
      question: "The company’s long-term financial success is _______ linked to the global economic stability.",
      options: ["dissolve", "indissolubly", "indissoluble", "dissolution"],
      answer: "indissolubly",
      explanation: "ช่องว่างอยู่หน้ากริยาช่อง 3 'linked' ในโครงสร้าง passive voice ต้องการ Adverb มาขยายความเชื่อมโยงว่า 'มีความเกี่ยวพันกันอย่างเหนียวแน่นแยกไม่ออก' คำคุณศัพท์ที่เป็น Adverb คือ 'indissolubly' ส่วน indissoluble เป็น Adjective"
    },
    {
      id: "l5_q4",
      question: "Only after completing the rigorous safety training program _______ to enter the cleanroom area.",
      options: ["are employees", "employees are", "employees will", "do employees"],
      answer: "are employees",
      explanation: "ประโยคนี้ขึ้นต้นด้วยกลุ่มคำปฏิเสธหรือคำจำกัดเงื่อนไขที่เน้นย้ำ 'Only after...' (หลังจากเสร็จสิ้น...เท่านั้น) ตามหลักไวยากรณ์ภาษาอังกฤษ จะต้องมีการสลับลำดับคำ (Inversion) โดยนำกริยาช่วยหรือกริยาแท้ขึ้นมาไว้หน้าประธาน ดังนั้นโครงสร้าง 'are employees' (กริยา are นำหน้าประธาน employees) จึงถูกต้องที่สุด"
    },
    {
      id: "l5_q5",
      question: "The newly appointed CEO is widely known for her highly _______ style of management.",
      options: ["collaborate", "collaborative", "collaboratively", "collaboration"],
      answer: "collaborative",
      explanation: "ช่องว่างตั้งอยู่ระหว่าง Adverb 'highly' และคำนาม 'style' ดังนั้นคำในช่องว่างจะต้องทำหน้าที่เป็น Adjective ขยายคำนาม คำคุณศัพท์คือ 'collaborative' (ซึ่งทำงานร่วมมือกัน) ส่วน collaboration เป็นเพียงนาม และ collaboratively เป็น Adverb"
    },
    {
      id: "l5_q6",
      question: "The product's architectural design was highly praised for its _______ elegance and modern aesthetics.",
      options: ["aesthetic", "aesthetically", "aesthetics", "aesthetician"],
      answer: "aesthetic",
      explanation: "หน้าคำนาม 'elegance' (ความสง่างาม) ต้องการคำคุณศัพท์ (Adjective) มาขยายเพื่ออธิบายว่ามีความสวยงามในด้านศิลปะ คำว่า 'aesthetic' สามารถเป็นได้ทั้งนามและ Adjective ในที่นี้ทำหน้าที่ขยายคำนามร่วมได้ถูกต้อง ส่วน aesthetics เป็นคำนามพหูพจน์แปลว่าวิชาสุนทรียศาสตร์ และ aesthetician คือผู้เชี่ยวชาญด้านความงาม"
    },
    {
      id: "l5_q7",
      question: "The multinational expansion plans were temporarily put on hold _______ the pending lawsuit results.",
      options: ["pending", "pend", "pended", "depends"],
      answer: "pending",
      explanation: "ในที่นี้เราต้องการคำที่ทำหน้าที่เป็นบุพบท (Preposition) ในความหมายว่า 'ในระหว่างที่รอ/จนกว่าจะมี...' คำว่า 'pending' เป็นคำกริยาที่สามารถใช้ในเชิงบุพบทหมายถึง 'จนกว่าจะมีการตัดสิน/ระหว่างรอ...' ได้อย่างถูกต้องตามรูปแบบภาษาหนังสือระดับสูง"
    },
    {
      id: "l5_q8",
      question: "The HR vice president emphasized the critical importance of _______ conflict resolutions.",
      options: ["expedite", "expeditious", "expeditiously", "expedition"],
      answer: "expeditious",
      explanation: "หน้ากลุ่มคำนาม 'conflict resolutions' (การแก้ไขข้อขัดแย้ง) ต้องการ Adjective เพื่อบอกว่าการแก้ไขนั้นต้องทำอย่างรวดเร็วและมีประสิทธิภาพ คำคุณศัพท์ชั้นสูงคือ 'expeditious' (ซึ่งรวดเร็ว/ทันท่วงที) ส่วน expedite เป็นคำกริยา และ expeditiously เป็นคำวิเศษณ์"
    },
    {
      id: "l5_q9",
      question: "The contract contains a specific clause that allows for _______ contract termination in extreme cases.",
      options: ["unilateral", "unilaterally", "unilaterality", "lateral"],
      answer: "unilateral",
      explanation: "หน้ากลุ่มคำนาม 'contract termination' ต้องการคำคุณศัพท์ (Adjective) มาขยายเพื่ออธิบายประเภทการบอกเลิกสัญญาว่าสามารถทำได้โดย 'ฝ่ายเดียว' คำคุณศัพท์นั้นคือ 'unilateral' (โดยฝ่ายเดียว) ส่วน unilaterally เป็น Adverb"
    },
    {
      id: "l5_q10",
      question: "The manager’s faulty _______ of the new regulations caused massive confusion among staff members.",
      options: ["interpret", "interpretation", "interpretive", "interpreting"],
      answer: "interpretation",
      explanation: "หลังคำคุณศัพท์ 'faulty' เราต้องการคำนามหลัก (Noun) มารองรับ โครงสร้างคำนามแท้คือ 'interpretation' (การตีความ) ซึ่งเหมาะสมกว่าการใช้คำกริยาเดิมหรือ gerund ในตำแหน่งที่ต้องการความสละสลวยทางวิชาชีพ"
    },
    {
      id: "l5_q11",
      question: "The startup technology firm has experienced _______ growth over the last five business years.",
      options: ["exponential", "exponentially", "exponent", "exponence"],
      answer: "exponential",
      explanation: "หน้าคำนาม 'growth' (การเติบโต) ต้องการ Adjective มาขยายเพื่อระบุความเร็วของการเพิ่มขึ้นว่าเพิ่มขึ้นแบบทวีคูณ คำคุณศัพท์คือ 'exponential' ส่วน exponentially เป็น Adverb ขยายคำกริยา"
    },
    {
      id: "l5_q12",
      question: "The executive's decision was ultimately made in _______ with the legal department’s strict advice.",
      options: ["conform", "conformity", "conformist", "conformed"],
      answer: "conformity",
      explanation: "ในโครงสร้างสำนวนบุพบทวลี 'in conformity with' (ซึ่งเป็นไปตาม/สอดคล้องกับ) ตำแหน่งในช่องว่างหลังจากบุพบท 'in' ต้องการคำนามเพื่อทำหน้าที่รับความสัมพันธ์ทางไวยากรณ์ คำนามคือ 'conformity' (ความสอดคล้อง/ความเหมือนกัน)"
    },
    {
      id: "l5_q13",
      question: "The newly drafted remote work policy will be implemented _______ immediately.",
      options: ["effect", "effective", "effectively", "effectiveness"],
      answer: "effective",
      explanation: "ในสำนวนกฎหมายหรือประกาศทางการเพื่อบอกจุดเริ่มต้นของการบังคับใช้กฎ จะใช้โครงสร้าง '[adjective/participle] + immediately' คือคำว่า 'effective immediately' (มีผลบังคับใช้ในทันที) ซึ่งถือเป็นรูปย่อจาก which is effective immediately จึงตอบ effective"
    },
    {
      id: "l5_q14",
      question: "The candidate’s professional qualifications are _______ suited for the research director position.",
      options: ["ideal", "ideally", "ideality", "idealize"],
      answer: "ideally",
      explanation: "ช่องว่างขยาย Adjective/Participle 'suited' (ซึ่งเหมาะสม) ตำแหน่งนี้ต้องการ Adverb เพื่อบอกความหมายว่าเหมาะสม 'อย่างสมบูรณ์แบบ/อย่างในอุดมคติ' คำวิเศษณ์คือ 'ideally' ส่วน ideal เป็นเพียงคุณศัพท์ปกติ"
    },
    {
      id: "l5_q15",
      question: "The board is actively seeking an _______ settlement to avoid a long and costly court trial.",
      options: ["friendship", "amicable", "amicably", "amity"],
      answer: "amicable",
      explanation: "หน้าคำนาม 'settlement' (การตกลง/การประนีประนอม) ต้องการ Adjective มาขยายเพื่ออธิบายว่าเป็นการตกลงอย่างเป็นมิตรและยินยอมพร้อมใจทั้งสองฝ่าย คำคุณศัพท์คือ 'amicable' (ที่เป็นมิตร/ที่ประนีประนอม) ส่วน amity และ friendship เป็นคำนาม"
    },
    {
      id: "l5_q16",
      question: "The new database software integrates _______ with our existing digital platform.",
      options: ["seamless", "seamlessly", "seamlessness", "seams"],
      answer: "seamlessly",
      explanation: "ช่องว่างอยู่หลังกรรมตรง/ส่วนขยาย และใช้เพื่อบอกลักษณะการกระทำต่อคำกริยา 'integrates' (รวมเข้าด้วยกันอย่างราบรื่นไม่มีรอยต่อ) จึงต้องใช้ Adverb คือ 'seamlessly' ส่วน seamless เป็น Adjective"
    },
    {
      id: "l5_q17",
      question: "The board of directors was greatly impressed by the _______ of the market analysis report.",
      options: ["deep", "depth", "deeply", "deepen"],
      answer: "depth",
      explanation: "โครงสร้าง 'the + [Noun] + of' กำหนดให้ช่องว่างเป็นคำนาม คำนามมาตรฐานที่ระบุปริมาณความลึกซึ้งหรือมิติข้อมูลของผลวิเคราะห์คือ 'depth' (ความลึก/ความลึกซึ้ง) ส่วน deeply เป็นคำวิเศษณ์ และ deepen เป็นคำกริยา"
    },
    {
      id: "l5_q18",
      question: "The company’s annual marketing budget is _______ to change based on overall market performance.",
      options: ["subject", "subjection", "subjective", "subjectively"],
      answer: "subject",
      explanation: "ในโครงสร้างสำนวน 'be subject to + noun/V-ing' (อาจมีการเปลี่ยนแปลง/อยู่ภายใต้บังคับของ) คำว่า 'subject' ในสำนวนนี้ทำหน้าที่เป็นคำคุณศัพท์ (Adjective) อธิบายสภาพของประธาน คำอื่นๆ เช่น subjection (นาม) หรือ subjective (คุณศัพท์ที่แปลว่าอัตวิสัย/ตามความคิดส่วนตัว) ไม่เข้ากับบริบทสำนวนนี้"
    },
    {
      id: "l5_q19",
      question: "The new imported machinery operates _______ quieter than the previous domestic model.",
      options: ["notice", "noticeable", "noticeably", "noticeability"],
      answer: "noticeably",
      explanation: "ช่องว่างตั้งอยู่หน้าคำคุณศัพท์ขั้นกว่า 'quieter' (ซึ่งเงียบกว่า) ตำแหน่งนี้ต้องการ Adverb เพื่อมาขยายและระบุระดับความแตกต่างของการเปรียบเทียบว่าเงียบกว่า 'อย่างเห็นได้ชัด' ดังนั้นจึงตอบ 'noticeably'"
    },
    {
      id: "l5_q20",
      question: "The legal battle ended in an _______ settlement between the two rival technology corporations.",
      options: ["out-of-court", "out of court", "outer court", "outside court"],
      answer: "out-of-court",
      explanation: "หน้าคำนาม 'settlement' ต้องการคำคุณศัพท์ขยาย ในภาษาอังกฤษเมื่อนำวลีหลายคำมาทำหน้าที่ขยายคำนามข้างหลัง จะต้องเชื่อมคำเหล่านั้นด้วยยัติภังค์ (hyphen) เพื่อทำหน้าที่เป็นคำคุณศัพท์ประสมเดี่ยว (Compound Adjective) ดังนั้นรูป 'out-of-court' (ที่ไกล่เกลี่ยตกลงนอกศาล) จึงถูกต้องที่สุด"
    }
  ]
};
