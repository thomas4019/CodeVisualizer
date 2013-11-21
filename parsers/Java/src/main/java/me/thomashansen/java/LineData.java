
package me.thomashansen.java;

import japa.parser.ast.Node;

/**
 *
 * @author thomas
 */
public class LineData {
	private int begin;
	private int end;
	
	LineData(int begin, int end) {
		this.begin = begin;
		this.end = end;
	}
	
	LineData(Node n) {
		begin = n.getBeginLine();
		end = n.getEndLine();
	}
	
	/**
	 * @return the begin
	 */
	public int getBegin()
	{
		return begin;
	}

	/**
	 * @param begin the begin to set
	 */
	public void setBegin(int begin)
	{
		this.begin = begin;
	}

	/**
	 * @return the end
	 */
	public int getEnd()
	{
		return end;
	}

	/**
	 * @param end the end to set
	 */
	public void setEnd(int end)
	{
		this.end = end;
	}
}
