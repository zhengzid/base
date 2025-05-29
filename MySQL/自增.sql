set @seq=1;
INSERT INTO custom_sequence(SequenceKey,SequenceValue) VALUES("20250528", @seq)
ON DUPLICATE KEY 
UPDATE SequenceValue=(@seq:=SequenceValue + 1);
select @seq;
